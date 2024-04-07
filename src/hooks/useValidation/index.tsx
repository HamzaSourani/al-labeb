import { useEffect, useState } from "react";
export type Validation = "valid" | "unValid";
const useValidation = (condition: boolean) => {
  const [isValid, setIsValid] = useState<Validation>("unValid");
  useEffect(() => {
    if (condition) {
      setIsValid("valid");
    } else {
      setIsValid("unValid");
    }
  }, [condition]);
  return isValid;
};

export default useValidation;
