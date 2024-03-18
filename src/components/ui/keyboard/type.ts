import { Dispatch, SetStateAction } from "react";

export interface Key {
  label: string;
  value: string;
}
interface KeyboardProps {
  enteredKeys: Key[];
  setEnteredKeys: Dispatch<SetStateAction<Key[]>>;
  setReadEnteredCharacters: Dispatch<SetStateAction<boolean>>;
}
export default KeyboardProps;
