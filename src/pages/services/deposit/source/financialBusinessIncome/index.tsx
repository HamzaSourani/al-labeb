import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";

const FinancialBusinessIncomePage = () => {
  const [selectedIncome, setSelectedIncome] = useState({
    src: "29",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const FINANCIAL_BUSINESS_INCOMES = [
    { src: "28.1", label: "مواد غزائية" },
    { src: "28.2", label: "خدمات اتصالات" },
    { src: "28.3", label: "مواد بلاستيكية" },
    { src: "28.4", label: "البسة" },
    { src: "28.5", label: "أخرى" },
  ] as const;
  const isValid = useValidation(selectedIncome.src !== "29");

  const handleNext = () => {
    switch (selectedIncome.src) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، مواد غزائية",
        });
        break;
      case "28.2":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، خدمات اتصالات",
        });
        break;
      case "28.3":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، مواد بلاستيكية",
        });
        break;
      case "28.4":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، البسة",
        });
        break;
      case "28.5":
        handleAddDepositOrWithdrawalInfo({
          key: "source",
          value: "عائدات عمل تجاري، أخرى",
        });
        break;
    }
    navigate("/al-labeb/deposit/cause");
  };
  return (
    <div>
      <div className="flex justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedIncome.src}
            onNext={handleNext}
            validation={isValid}
            disableNextButton={isValid === "unValid"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {FINANCIAL_BUSINESS_INCOMES.map((income) => (
            <div
              key={income.src}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": income === selectedIncome,
                  "border-secondary ": income !== selectedIncome,
                },
              )}
              onClick={() => setSelectedIncome(income)}
            >
              <figure>
                <img
                  src={`/assets/images/thumbnail/${income.src}.png`}
                  className="aspect-square w-52 "
                  alt=""
                />
                <figcaption
                  className={classNames("py-2 text-center font-semibold", {
                    "text-primary ": income.src === selectedIncome.src,
                    "text-secondary ": income.src !== selectedIncome.src,
                  })}
                >
                  {income.label}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialBusinessIncomePage;
