import { Validation } from "@/hooks/useValidation";
import { Dispatch, SetStateAction } from "react";
export interface VideoWithOptionsProps {
  selectedOption: Option;
  validation: Validation;
  options: Option[];
  setSelectedOption: Dispatch<SetStateAction<Option>>;
  handleNext: () => void;
}
interface Option {
  src: string;
  label: string;
}
