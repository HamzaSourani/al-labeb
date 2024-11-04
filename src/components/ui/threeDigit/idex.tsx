import { ThreeDigitProps } from "./type";
import DigitSection from "./digit";

const ThreeDigit = ({
  disabled = false,
  setEnteredNumber,
}: ThreeDigitProps) => {
  const handleDigitSectionChange = (digitIndex: number) => {
    return (newDigit: number) => {
      if (setEnteredNumber)
        setEnteredNumber((pre) => {
          const newEnteredDigits = [...pre];
          if (typeof newDigit === "number")
            newEnteredDigits[digitIndex] = newDigit;
          return newEnteredDigits;
        });
    };
  };
  return (
    <div className="embla">
      <DigitSection
        perspective="right"
        disabled={disabled}
        handleDigitSectionChange={handleDigitSectionChange(0)}
      />
      <DigitSection
        perspective="center"
        disabled={disabled}
        handleDigitSectionChange={handleDigitSectionChange(1)}
      />
      <DigitSection
        perspective="left"
        disabled={disabled}
        handleDigitSectionChange={handleDigitSectionChange(2)}
      />
    </div>
  );
};

export default ThreeDigit;
