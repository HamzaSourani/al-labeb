import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const CommercialPurposePage = () => {
  const [selectedService, setSelectedService] = useState("29");
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const SERVICES = ["28.1", "28.2", "28.3", "28.4", "28.5"];

  const handleNext = () => {
    switch (selectedService) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، مواد غزائية",
        });

        break;
      case "28.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، خدمات اتصالات",
        });
        break;
      case "28.3":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، مواد بلاستيكية",
        });

        break;
      case "28.4":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، البسة",
        });
        break;
      case "28.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، مواد تجميل",
        });

        break;
    }
    navigate("/al-labeb/withdrawal/end");
  };
  return (
    <div>
      <div className="flex   items-center justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedService}
            onNext={handleNext}
            previousUrl="/"
            disableNextButton={selectedService === "29"}
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
    </div>
  );
};

export default CommercialPurposePage;
