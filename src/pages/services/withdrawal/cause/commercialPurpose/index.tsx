import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";

const CommercialPurposePage = () => {
  const [selectedPurpose, setSelectedPurpose] = useState({
    src: "29",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const PURPOSES = [
    { src: "28.1", label: "مواد غذائية" },
    { src: "28.2", label: "خدمات اتصالات" },
    { src: "28.3", label: "مواد بلاستيكية" },
    { src: "28.4", label: "البسة" },
    { src: "28.5", label: "أخرى" },
  ] as const;
  const isValid = useValidation(selectedPurpose.src !== "29");

  const handleNext = () => {
    switch (selectedPurpose.src) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "اغراض تجارية، مواد غذائية",
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
          value: "اغراض تجارية، أخرى",
        });

        break;
    }
    navigate("/al-labeb/withdrawal/end");
  };
  return (
    <div>
      <div className="flex justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedPurpose.src}
            onNext={handleNext}
            validation={isValid}
            disableNextButton={isValid === "unValid"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {PURPOSES.map((purpose) => (
            <div
              key={purpose.src}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": purpose.src === selectedPurpose.src,
                  "border-secondary ": purpose.src !== selectedPurpose.src,
                },
              )}
              onClick={() => setSelectedPurpose(purpose)}
            >
              <video
                src={`/assets/videos/${purpose.src}.mp4`}
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
