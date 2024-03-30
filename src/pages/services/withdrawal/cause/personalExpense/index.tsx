import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import Video from "@/components/ui/video";
import useValidation from "@/hooks/useValidation";

const PersonalExpensePage = () => {
  const [selectedExpense, setSelectedExpense] = useState({
    src: "28",
    label: "",
  });
  const navigate = useNavigate();
  const { handleAddDepositOrWithdrawalInfo } = useUserInfoContext();
  const EXPENSES = [
    { src: "28.1", label: "مواد غزائية" },
    { src: "28.2", label: "خدمات اتصالات" },
    { src: "28.3", label: "مواد بلاستيكية" },
    { src: "28.4", label: "البسة" },
    { src: "28.5", label: "أخرى" },
  ] as const;
  const isValid = useValidation(selectedExpense.src !== "28");

  const handleNext = () => {
    switch (selectedExpense.src) {
      case "28.1":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، مواد غزائية",
        });

        break;
      case "28.2":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، خدمات اتصالات",
        });
        break;
      case "28.3":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، مواد بلاستيكية",
        });

        break;
      case "28.4":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية، البسة و مواد تجميل",
        });
        break;

      case "28.5":
        handleAddDepositOrWithdrawalInfo({
          key: "cause",
          value: "مصاريف شخصية،اخرى",
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
            src={selectedExpense.src}
            onNext={handleNext}
            validation={isValid}
            disableNextButton={isValid === "unValid"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {EXPENSES.map((expense) => (
            <div
              key={expense.src}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": expense.src === selectedExpense.src,
                  "border-secondary ": expense.src !== selectedExpense.src,
                },
              )}
              onClick={() => setSelectedExpense(expense)}
            >
              <figure>
                <img
                  src={`/assets/images/thumbnail/${expense.src}.png`}
                  className="aspect-square w-52 "
                  alt=""
                />
                <figcaption
                  className={classNames("py-2 text-center font-semibold", {
                    "text-primary ": expense.src === selectedExpense.src,
                    "text-secondary ": expense.src !== selectedExpense.src,
                  })}
                >
                  {expense.label}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalExpensePage;
