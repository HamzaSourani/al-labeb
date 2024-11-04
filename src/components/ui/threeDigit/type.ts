import { Dispatch, SetStateAction } from "react";

export type ThreeDigitProps = Partial<{
  disabled?:boolean;
  setEnteredNumber?: Dispatch<SetStateAction<number[]>>;
}
> 