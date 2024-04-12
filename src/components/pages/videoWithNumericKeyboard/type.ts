import { Dispatch, SetStateAction } from "react";
import { Validation } from "@/hooks/useValidation";
import { Key } from "@/components/ui/NumericKeyboard/type";
export interface VideoWithNumericKeyboardProps {
  enteredKeys: Key[];
  validation: Validation;
  videoNumber: string;
  setEnteredKeys: Dispatch<SetStateAction<Key[]>>;
  handleNext: () => void;
}
