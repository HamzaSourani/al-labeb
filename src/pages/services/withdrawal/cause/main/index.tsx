import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const WithDrawalCausePage = () => {
  const [selectedService, setSelectedService] = useState("25");
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const SERVICES = ["25.1", "25.2", "25.3"];

  const handleNext = () => {
    switch (selectedService) {
      case "25.1":
        navigate("personal-expense");
        break;
      case "25.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "راتب",
        });
        navigate("/al-labeb/withdrawal/end");
        break;
      case "25.3":
        navigate("commercial-purpose");
        break;
    }
  };
  return (
    <div>
      <div className="flex   items-center justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedService}
            onNext={handleNext}
            previousUrl="/"
            disableNextButton={selectedService === "25"}
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

export default WithDrawalCausePage;
