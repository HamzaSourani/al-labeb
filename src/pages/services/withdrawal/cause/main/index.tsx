import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";

const WithDrawalCausePage = () => {
  const [selectedCause, setSelectedCause] = useState({
    src: "25",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const CAUSES = [
    { src: "25.1", label: "مصاريف شخصية" },
    { src: "25.2", label: "راتب" },
    { src: "25.3", label: "اغراض تجارية" },
  ];
  const isValid = useValidation(selectedCause.src !== "25");

  const handleNext = () => {
    switch (selectedCause.src) {
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
      <div className="flex justify-center gap-4">
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

export default WithDrawalCausePage;
