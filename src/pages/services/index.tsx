import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("2");
  const navigate = useNavigate();
  const { depositOrWithdrawalInfo, handleAddDepositOrWithdrawalInfo } =
    useUserInfoContext();
  console.log(depositOrWithdrawalInfo.service_name, "service");
  const SERVICES = ["3", "4", "40"];
  const handleNext = () => {
    switch (selectedService) {
      case "4":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "deposit",
        });
        break;
      case "40":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "withdrawal",
        });
        break;
    }
    navigate(selectedService);
  };
  return (
    <div>
      <div className="flex h-screen  items-center justify-center gap-4">
        <div className="md:w-1/3 lg:w-1/2 ">
          <Video
            src={selectedService}
            onNext={handleNext}
            previousUrl="/"
            disableNextButton={selectedService === "2"}
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

export default ServicesPage;
