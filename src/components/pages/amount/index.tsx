import ThreeDigit from "@/components/ui/threeDigit/idex";
import Video from "@/components/ui/video";
import { VideoWithAmountProps } from "./type";

const VideoWithAmount = ({
  enteredValue,
  validation,
  videoNumber,
  setSecondSegmentOfDigit,
  setThirdSegmentOfDigit,
  handleNext,
}: VideoWithAmountProps) => {
  
  return (
    <div className="flex  items-center  flex-col gap-8   ">
      <div className="flex items-center  w-[50vw] h-[500px]  gap-4">
        <Video src={videoNumber} onNext={handleNext} validation={validation} />
        <output className="h-12 w-full rounded-lg  border  border-gray-300 px-4 py-2 text-lg font-semibold shadow-sm">
          {enteredValue}
        </output>
      </div>
      <div className="flex gap-4">
        <div className="w-[20vw] ">
          <ThreeDigit disabled />
        </div>
        <div className="w-[20vw] ">
          <ThreeDigit setEnteredNumber={setSecondSegmentOfDigit} />
        </div>
        <div className="w-[20vw] ">
          <ThreeDigit setEnteredNumber={setThirdSegmentOfDigit} />
        </div>
      </div>
    </div>
  );
};

export default VideoWithAmount;
