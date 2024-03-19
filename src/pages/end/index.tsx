import Video from "@/components/ui/video";
import { Link } from "react-router-dom";

const EndPage = () => {
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="30" previousUrl="/" />
      </div>
      <div>
        <Link to={"/"}>العودة إلى القائمة للرئيسة</Link>
      </div>
    </div>
  );
};

export default EndPage;
