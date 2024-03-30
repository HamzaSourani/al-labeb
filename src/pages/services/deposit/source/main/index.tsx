import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";

const DepositSourcePage = () => {
  const [selectedSource, setSelectedSource] = useState({
    src: "27",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const SOURCES = [
    { src: "27.1", label: "ادخار" },
    { src: "27.2", label: "راتب" },
    { src: "27.3", label: "عائدات عمل تجاري" },
  ];
  const isValid = useValidation(selectedSource.src !== "27");

  const handleNext = () => {
    switch (selectedSource.src) {
      case "27.1":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "ادخار",
        });
        navigate("/al-labeb/deposit/cause");

        break;
      case "27.2":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "راتب",
        });
        navigate("/al-labeb/deposit/cause");
        break;
      case "27.3":
        navigate("financial-business-income");
        break;
    }
  };
  return (
    <div>
      <div className="flex justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedSource.src}
            onNext={handleNext}
            validation={isValid}
            disableNextButton={isValid === "unValid"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {SOURCES.map((source) => (
            <div
              key={source.src}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": source.src === selectedSource.src,
                  "border-secondary ": source.src !== selectedSource.src,
                },
              )}
              onClick={() => setSelectedSource(source)}
            >
              <figure>
                <img
                  src={`/assets/images/thumbnail/${source.src}.png`}
                  className="aspect-square w-52 "
                  alt=""
                />
                <figcaption
                  className={classNames("py-2 text-center font-semibold", {
                    "text-primary ": source.src === selectedSource.src,
                    "text-secondary ": source.src !== selectedSource.src,
                  })}
                >
                  {source.label}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositSourcePage;
