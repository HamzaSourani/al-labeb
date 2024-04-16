import { Swiper, SwiperSlide } from "swiper/react";
import TSwiper from "swiper";
import classNames from "classnames";
import { ThreeDigitProps } from "./type";
import "swiper/css";

const ThreeDigit = ({
  enteredNumber,

  setEnteredNumber,
}: ThreeDigitProps) => {
  const numbers = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleFirstBoxChange = (swiper: TSwiper) => {
    const newEnteredKeys = [...enteredNumber];
    switch (swiper.realIndex) {
      case 0:
        newEnteredKeys[0] = 0;
        break;
      default:
        newEnteredKeys[0] = numbers[swiper.realIndex] + 1;
    }
    setEnteredNumber(newEnteredKeys);
  };
  const handleSecondBoxChange = (swiper: TSwiper) => {
    const newEnteredKeys = [...enteredNumber];
    switch (swiper.realIndex) {
      case 0:
        newEnteredKeys[1] = 0;
        break;
      default:
        newEnteredKeys[1] = numbers[swiper.realIndex] + 1;
    }
    setEnteredNumber(newEnteredKeys);
  };
  const handleThirdBoxChange = (swiper: TSwiper) => {
    const newEnteredKeys = [...enteredNumber];
    switch (swiper.realIndex) {
      case 0:
        newEnteredKeys[2] = 0;
        break;
      default:
        newEnteredKeys[2] = numbers[swiper.realIndex] + 1;
    }
    setEnteredNumber(newEnteredKeys);
  };
  return (
    <div className="flex justify-center gap-4">
      <div className=" relative h-24 w-10">
        <div className="absolute top-8 h-8 w-10 border-y border-primary "></div>
        <Swiper
          className="h-full w-full"
          slidesPerView={3}
          loop
          onSlideChange={handleFirstBoxChange}
          direction={"vertical"}
        >
          {numbers.map((num) => (
            <SwiperSlide key={num}>
              {({ isNext }) => (
                <div
                  className={classNames(
                    "flex h-full items-center justify-center transition-all  ",
                    {
                      " text-xl font-semibold text-secondary ": isNext,
                      "text-gray-400 ": !isNext,
                    },
                  )}
                >
                  <p>{num}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" relative h-24 w-10">
        <div className="absolute top-8 h-8 w-10 border-y border-primary "></div>
        <Swiper
          className="h-full w-full"
          slidesPerView={3}
          loop
          onSlideChange={handleSecondBoxChange}
          direction={"vertical"}
        >
          {numbers.map((num) => (
            <SwiperSlide key={num}>
              {({ isNext }) => (
                <div
                  className={classNames(
                    "flex h-full items-center justify-center transition-colors  ",
                    {
                      "text-xl font-semibold text-secondary ": isNext,
                      "text-gray-400": !isNext,
                    },
                  )}
                >
                  <p>{num}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
      <div className=" relative h-24 w-10">
        <div className="absolute top-8 h-8 w-10 border-y border-primary "></div>
        <Swiper
          className="h-full w-full"
          slidesPerView={3}
          loop
          onSlideChange={handleThirdBoxChange}
          direction={"vertical"}
        >
          {numbers.map((num) => (
            <SwiperSlide key={num}>
              {({ isNext }) => (
                <div
                  className={classNames(
                    "flex h-full items-center justify-center transition-colors  ",
                    {
                      "text-xl font-semibold text-secondary ": isNext,
                      "text-gray-400": !isNext,
                    },
                  )}
                >
                  <p>{num}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThreeDigit;
