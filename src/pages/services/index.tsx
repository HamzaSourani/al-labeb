import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("2");
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const SERVICES = ["3", "4", "40"];
  const handleNext = () => {
    switch (selectedService) {
      case "4":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "إيداع",
        });
        break;
      case "40":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "سحب",
        });
        break;
    }
    navigate(selectedService);
  };
  return (
    <div className="flex   items-center justify-center gap-4">
      <div className="  md:w-1/2 lg:w-1/3 ">
        <Video
          src={selectedService}
          onNext={handleNext}
          previousUrl="/"
          disableNextButton={selectedService === "2"}
        />
      </div>
      <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
        {SERVICES.map((service) => (
          <div
            key={service}
            className={classNames(
              "snap-start border shadow transition-all hover:cursor-pointer",
              {
                "border-primary ": service === selectedService,
                "border-secondary ": service !== selectedService,
              },
            )}
            onClick={() => setSelectedService(service)}
          >
            <video
              src={`/assets/videos/${service}.mp4`}
              className="aspect-square w-52 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
