import { Dispatch, SetStateAction } from "react";
import { Key } from "@/components/ui/keyboard/type";
import { Validation } from "@/hooks/useValidation";

export interface VideoWithKeyboardProps {
  enteredKeys: Key[];
  validation: Validation;
  videoNumber: string;
  setEnteredKeys: Dispatch<SetStateAction<Key[]>>;
  handleNext: () => void;
}
