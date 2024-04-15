import { Validation } from "@/hooks/useValidation";
import { Dispatch, SetStateAction } from "react";

export interface VideoWithAmountProps {
  enteredValue: string;
  secondSegmentOfDigit: number[];
  thirdSegmentOfDigit: number[];
  validation: Validation;
  videoNumber: string;
  setSecondSegmentOfDigit: Dispatch<SetStateAction<number[]>>;
  setThirdSegmentOfDigit: Dispatch<SetStateAction<number[]>>;
  handleNext: () => void;
}
