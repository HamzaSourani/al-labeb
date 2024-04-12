import Video from "@/components/ui/video";
import { SingleVideoProps } from "./type";

const SingleVideo = ({
  videoNumber,
  validation,
  handleNext,
}: SingleVideoProps) => {
  return (
    <div className=" flex  items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src={videoNumber} onNext={handleNext} validation={validation} />
      </div>
    </div>
  );
};

export default SingleVideo;
