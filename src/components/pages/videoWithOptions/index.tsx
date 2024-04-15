import classNames from "classnames";
import Video from "@/components/ui/video";
import { VideoWithOptionsProps } from "./type";

const VideoWithOptions = ({
  selectedOption,
  validation,
  options,
  setSelectedOption,
  handleNext,
}: VideoWithOptionsProps) => {
  return (
    <div>
      <div className="flex  items-start justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedOption.src}
            onNext={handleNext}
            validation={validation}
          />
        </div>
        <div
          className={classNames("grid  items-start gap-4 ", {
            "grid-cols-2": options.length <= 3,
            "grid-cols-3": options.length > 3,
          })}
        >
          {options.map((cause) => (
            <div
              key={cause.src}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": cause.src === selectedOption.src,
                  "border-secondary ": cause.src !== selectedOption.src,
                },
              )}
              onClick={() => setSelectedOption(cause)}
            >
              <figure>
                <img
                  src={`/assets/images/thumbnail/${cause.src}.png`}
                  className="aspect-square w-48 "
                  alt=""
                />
                <figcaption
                  className={classNames("py-2 text-center font-semibold", {
                    "text-primary ": cause.src === selectedOption.src,
                    "text-secondary ": cause.src !== selectedOption.src,
                  })}
                >
                  {cause.label}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoWithOptions;
