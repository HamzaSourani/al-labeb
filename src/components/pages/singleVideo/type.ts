import { Validation } from "@/hooks/useValidation";

export interface SingleVideoProps {
  videoNumber: string;
  validation: Validation;
  handleNext: () => void;
}
