import { ThreeDigitProps } from "./type";
import DigitSection  from "./digit";

const ThreeDigit = ({
  setEnteredNumber,
}: ThreeDigitProps) => {
 
const handleDigitSectionChange=(digitIndex:number)=>{
    return (newDigit:number)=>{
    setEnteredNumber((pre)=>{
      const newEnteredDigits=[...pre]
      if(typeof newDigit === "number")
      newEnteredDigits[digitIndex]=newDigit
      return newEnteredDigits
    })
  }

}
  return (
    <div className="embla">
    <DigitSection
      perspective="right" 
      handleDigitSectionChange={handleDigitSectionChange(0)}
    />
    <DigitSection 
      perspective="center"
      handleDigitSectionChange={handleDigitSectionChange(1)}
    />
    <DigitSection
      perspective="left" 
      handleDigitSectionChange={handleDigitSectionChange(2)}
    />
  </div> 
  );
};

export default ThreeDigit;
