import Video from "@/components/ui/video";
import { useNavigate } from "react-router-dom";

const SavingAccountMainPage = () => {
  const navigate = useNavigate();
  const handleGoToSavingAccount = () => {
    navigate("explanation");
  };
  const handleGoToTermsAndConditions = () => {
    navigate("/al-labeb/open-account/terms-and-conditions");
  };
  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-y-4">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="9" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoToSavingAccount}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          نعم
        </button>
        <button
          onClick={handleGoToTermsAndConditions}
          className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
        >
          لا
        </button>
      </div>
    </div>
  );
};

export default SavingAccountMainPage;
