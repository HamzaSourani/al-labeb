import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DepositSourcePage = () => {
  const [selectedService, setSelectedService] = useState("26");
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const SERVICES = ["26.1", "26.2", "26.3", "26.4", "26.5", "26.6"];

  const handleNext = () => {
    switch (selectedService) {
      case "26.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "ادخار",
        });

        break;
      case "26.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "تغزية حساب",
        });
        break;
      case "26.3":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "سداد التزام",
        });

        break;
      case "26.4":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "قسط",
        });
        break;
      case "26.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "عمولات",
        });

        break;
      case "26.6":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "قيمة فاتورة",
        });
        break;
    }
    navigate("/al-labeb/deposit/amount");
  };
  return (
    <div>
      <div className="flex h-screen  items-center justify-center gap-4">
        <div className="md:w-1/3 lg:w-1/2 ">
          <Video
            src={selectedService}
            onNext={handleNext}
            previousUrl="/"
            disableNextButton={selectedService === "26"}
          />
        </div>
        <div className="flex flex-col gap-y-4 ">
          {SERVICES.map((service) => (
            <div key={service} onClick={() => setSelectedService(service)}>
              <video
                src={`/assets/videos/${service}.mp4`}
                className="aspect-square w-52 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositSourcePage;
