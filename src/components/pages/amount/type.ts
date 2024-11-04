import { Validation } from "@/hooks/useValidation";
import { Dispatch, SetStateAction } from "react";

export interface VideoWithAmountProps {
  enteredValue: string;
  validation: Validation;
  videoNumber: string;
  setSecondSegmentOfDigit: Dispatch<SetStateAction<number[]>>;
  setThirdSegmentOfDigit: Dispatch<SetStateAction<number[]>>;
  handleNext: () => void;
}
