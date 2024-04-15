import ThreeDigit from "@/components/ui/threeDigit/idex";
import Video from "@/components/ui/video";
import { VideoWithAmountProps } from "./type";

const VideoWithAmount = ({
  enteredValue,
  secondSegmentOfDigit,
  thirdSegmentOfDigit,
  validation,
  videoNumber,
  setSecondSegmentOfDigit,
  setThirdSegmentOfDigit,
  handleNext,
}: VideoWithAmountProps) => {
  return (
    <div className="grid max-h-[60vh]  grid-cols-1 justify-around gap-4 px-10 md:grid-cols-2 md:px-24  lg:grid-cols-3 lg:px-32 ">
      <div className="flex flex-col  gap-2">
        <Video src={videoNumber} onNext={handleNext} validation={validation} />
        <output className="min-h-12 w-full rounded-lg  border  border-gray-300 px-4 py-2 text-lg font-semibold shadow-sm">
          {enteredValue}
        </output>
      </div>
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg bg-gray-100/80 shadow-sm shadow-gray-300">
        <div className="overflow-hidden rounded-t-lg border border-primary">
          <video
            className="aspect-square w-full"
            src="/assets/videos/51.mp4"
            autoPlay
            loop
          ></video>
        </div>
        <ThreeDigit
          enteredNumber={secondSegmentOfDigit}
          setEnteredNumber={setSecondSegmentOfDigit}
        />
      </div>
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-lg bg-gray-100/80 shadow-sm shadow-gray-300">
        <div className="overflow-hidden rounded-t-lg border border-primary">
          <video
            className="aspect-square w-full"
            src="/assets/videos/52.mp4"
            autoPlay
            loop
          ></video>
        </div>
        <ThreeDigit
          enteredNumber={thirdSegmentOfDigit}
          setEnteredNumber={setThirdSegmentOfDigit}
        />
      </div>
    </div>
  );
};

export default VideoWithAmount;
