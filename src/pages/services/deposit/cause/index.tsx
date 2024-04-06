import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";

const DepositCausePage = () => {
  const [selectedCause, setSelectedCause] = useState({
    src: "26",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const isValid = useValidation(selectedCause.src !== "26");

  const CAUSES = [
    { src: "26.1", label: "ادخار" },
    { src: "26.2", label: "تغذية حساب" },
    { src: "26.3", label: "سداد التزام" },
    { src: "26.4", label: "تحويل وحدات" },
    { src: "26.5", label: "قسط" },
    { src: "26.6", label: "قيمة فاتورة" },
  ];

  const handleNext = () => {
    switch (selectedCause.src) {
      case "26.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "ادخار",
        });

        break;
      case "26.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "تغذية حساب",
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
          value: "تحويل وحدات",
        });
        break;
      case "26.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "قسط",
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
      <div className="flex  justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedCause.src}
            onNext={handleNext}
            validation={isValid}
            disableNextButton={isValid === "unValid"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {CAUSES.map((cause) => (
            <div
              key={cause.src}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": cause.src === selectedCause.src,
                  "border-secondary ": cause.src !== selectedCause.src,
                },
              )}
              onClick={() => setSelectedCause(cause)}
            >
              <figure>
                <img
                  src={`/assets/images/thumbnail/${cause.src}.png`}
                  className="aspect-square w-52 "
                  alt=""
                />
                <figcaption
                  className={classNames("py-2 text-center font-semibold", {
                    "text-primary ": cause.src === selectedCause.src,
                    "text-secondary ": cause.src !== selectedCause.src,
                  })}
                >
                  {cause.label}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositCausePage;
