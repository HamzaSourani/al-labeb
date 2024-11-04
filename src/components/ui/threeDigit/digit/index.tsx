import React, { useEffect, useCallback, useRef } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import classNames from 'classnames'

const CIRCLE_DEGREES = 360
const WHEEL_ITEM_SIZE = 36
const WHEEL_ITEM_COUNT =10
const WHEEL_ITEMS_IN_VIEW = 2

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW
export const WHEEL_RADIUS = Math.round(
  WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT)
)

const isInView = (wheelLocation: number, slidePosition: number): boolean =>
  Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES

const setSlideStyles = (
  emblaApi: EmblaCarouselType,
  index: number,
  loop: boolean,
  slideCount: number,
  totalRadius: number
): void => {
  const slideNode = emblaApi.slideNodes()[index]
  const wheelLocation = emblaApi.scrollProgress() * totalRadius
  const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius
  const positionLoopStart = positionDefault + totalRadius
  const positionLoopEnd = positionDefault - totalRadius

  let inView = false
  let angle = index * -WHEEL_ITEM_RADIUS

  if (isInView(wheelLocation, positionDefault)) {
    inView = true
  }

  if (loop && isInView(wheelLocation, positionLoopEnd)) {
    inView = true
    angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS
  }

  if (loop && isInView(wheelLocation, positionLoopStart)) {
    inView = true
    angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS
  }

  if (inView) {
    slideNode.style.opacity = '1'
    slideNode.style.transform = `translateY(-${
      index * 100
    }%) rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`
  } else {
    slideNode.style.opacity = '0'
    slideNode.style.transform = 'none'
  }
}

export const setContainerStyles = (
  emblaApi: EmblaCarouselType,
  wheelRotation: number
): void => {
  emblaApi.containerNode().style.transform = `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`
}

type PropType = {
 handleDigitSectionChange:(newDigit:number)=>void
  perspective: 'left' | 'right'|'center',
  disabled?:boolean
}

 const DigitSection: React.FC<PropType> = (props) => {
  const {  perspective,disabled=false, handleDigitSectionChange} = props
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop:true,
    axis: 'y',
    dragFree: true,
    active:!disabled,
    containScroll: false,
    watchSlides: false
  })
  const rootNodeRef = useRef<HTMLDivElement>(null)
  const totalRadius = 10 * WHEEL_ITEM_RADIUS
  const rotationOffset = true ? 0 : WHEEL_ITEM_RADIUS
  const slides = Array.from(Array(10).keys())

  const inactivateEmblaTransform = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!emblaApi) return
      const { translate, slideLooper } = emblaApi.internalEngine()
      translate.clear()
      translate.toggleActive(false)
      slideLooper.loopPoints.forEach(({ translate }) => {
        translate.clear()
        translate.toggleActive(false)
      })
    },
    []
  )

  const rotateWheel = useCallback(
    (emblaApi: EmblaCarouselType) => {
      handleDigitSectionChange(emblaApi.slidesInView()[emblaApi.slidesInView().length-1])
        console.log(emblaApi.slidesInView()[emblaApi.slidesInView().length-1])
      const rotation = 10 * WHEEL_ITEM_RADIUS - rotationOffset
      const wheelRotation = rotation * emblaApi.scrollProgress()
      setContainerStyles(emblaApi, wheelRotation)
      emblaApi.slideNodes().forEach((_, index) => {
        setSlideStyles(emblaApi, index, true, 10, totalRadius)
      })
    },
    [rotationOffset, totalRadius]
  )

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('pointerUp', (emblaApi) => {
      const { scrollTo, target, location } = emblaApi.internalEngine()
      const diffToTarget = target.get() - location.get()
      const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1
      const distance = diffToTarget * factor
      scrollTo.distance(distance, true)
    })

    emblaApi.on('scroll', rotateWheel)

    emblaApi.on('reInit', (emblaApi) => {
      inactivateEmblaTransform(emblaApi)
      rotateWheel(emblaApi)
    })

    inactivateEmblaTransform(emblaApi)
    rotateWheel(emblaApi)
  }, [emblaApi, inactivateEmblaTransform, rotateWheel])

  return (
    <div className="embla-item">
      <div className="embla-scene" ref={rootNodeRef}>
        <div
          className={`embla-viewport embla-viewport--perspective-${perspective}`}
          ref={emblaRef}
        >
          <div className="embla-container">
            {slides.map((_, index) => (
              <div className={classNames("embla-slide",{"embla-slide-inactive":disabled})} key={index}>
                {index}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DigitSection