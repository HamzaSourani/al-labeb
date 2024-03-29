import { Dispatch, SetStateAction } from "react";
export interface Key {
  value: string;
  img: string;
}
interface NumericKeyboardProps {
  enteredKeys: Key[];
  setEnteredKeys: Dispatch<SetStateAction<Key[]>>;
}
export default NumericKeyboardProps;
