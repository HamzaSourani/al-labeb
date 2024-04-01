import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";
const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState({
    src: "2",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const isValid = useValidation(selectedService.src !== "2");

  const SERVICES = [
    { src: "4", label: "خدمة الإداع" },
    { src: "40", label: "خدمة السحب" },
  ];
  const handleNext = () => {
    switch (selectedService.src) {
      case "4":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "إيداع",
        });
        navigate("/al-labeb/deposit");
        break;
      case "40":
        handleAddDepositOrWithdrawalInfo({
          key: "service_name",
          value: "سحب",
        });
        navigate("/al-labeb/withdrawal");
        break;
    }
  };
  return (
    <div className="flex justify-center gap-4">
      <div className="  md:w-1/2 lg:w-1/3 ">
        <Video
          src={selectedService.src}
          onNext={handleNext}
          validation={isValid}
          disableNextButton={isValid === "unValid"}
        />
      </div>
      <div className="flex flex-col gap-y-4 self-start overflow-auto ">
        {SERVICES.map((service) => (
          <div
            key={service.src}
            className={classNames(
              "snap-start border shadow transition-all hover:cursor-pointer",
              {
                "border-primary ": service.src === selectedService.src,
                "border-secondary ": service.src !== selectedService.src,
              },
            )}
            onClick={() => setSelectedService(service)}
          >
            <figure>
              <img
                src={`/assets/images/thumbnail/${service.src}.png`}
                className="aspect-square w-52 "
                alt=""
              />
              <figcaption
                className={classNames("py-2 text-center font-semibold", {
                  "text-primary ": service.src === selectedService.src,
                  "text-secondary ": service.src !== selectedService.src,
                })}
              >
                {service.label}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
