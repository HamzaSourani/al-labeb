import Keyboard from "@/components/ui/keyboard";
import Video from "@/components/ui/video";
import { VideoWithKeyboardProps } from "./type";

const VideoWithKeyboard = ({
  enteredKeys,
  videoNumber,
  validation,
  setEnteredKeys,
  handleNext,
}: VideoWithKeyboardProps) => {
  return (
    <div className="flex  flex-col  items-center justify-around  md:flex-row">
      <div className="basis-1/3">
        <Video src={videoNumber} onNext={handleNext} validation={validation} />
      </div>
      <Keyboard enteredKeys={enteredKeys} setEnteredKeys={setEnteredKeys} />
    </div>
  );
};

export default VideoWithKeyboard;
