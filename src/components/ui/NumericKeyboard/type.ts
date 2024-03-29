import { Dispatch, SetStateAction } from "react";

interface NumericKeyboardProps {
  enteredKeys: string;
  setEnteredKeys: Dispatch<SetStateAction<string>>;
}
export default NumericKeyboardProps;
