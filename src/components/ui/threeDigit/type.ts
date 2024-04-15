import { Dispatch, SetStateAction } from "react";

export interface ThreeDigitProps {
  enteredNumber: number[];
  setEnteredNumber: Dispatch<SetStateAction<number[]>>;
}
