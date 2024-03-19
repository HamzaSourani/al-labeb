import Video from "@/components/ui/video";
import { useNavigate } from "react-router-dom";

const TermsAndConditionMainPage = () => {
  const navigate = useNavigate();
  const handleGoToNationalNumber = () => {
    navigate("/al-labeb/open-account/national-number");
  };
  const handleGoToEndPage = () => {
    navigate("/al-labeb/end");
  };
  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-y-4">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="3.1" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoToNationalNumber}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          نعم
        </button>
        <button
          onClick={handleGoToEndPage}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          لا
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditionMainPage;
