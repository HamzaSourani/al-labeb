import { Dispatch, SetStateAction } from "react";

interface NumericKeyboardProps {
  enteredKeys: string;
  setEnteredKeys: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
}
export default NumericKeyboardProps;
