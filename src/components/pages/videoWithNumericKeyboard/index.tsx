import Video from "@/components/ui/video";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import { VideoWithNumericKeyboardProps } from "./type";

const VideoWithNumericKeyboard = ({
  enteredKeys,
  validation,
  videoNumber,
  setEnteredKeys,
  handleNext,
}: VideoWithNumericKeyboardProps) => {
  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video src={videoNumber} onNext={handleNext} validation={validation} />
      </div>
      <NumericKeyboard
        enteredKeys={enteredKeys}
        setEnteredKeys={setEnteredKeys}
      />
    </div>
  );
};

export default VideoWithNumericKeyboard;
