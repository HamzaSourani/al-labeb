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
      <div className="flex  justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedOption.src}
            onNext={handleNext}
            validation={validation}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
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
                  className="aspect-square w-52 "
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
