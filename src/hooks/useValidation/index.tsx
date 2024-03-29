import { useEffect, useState } from "react";

const useValidation = (condition: boolean) => {
  const [isValid, setIsValid] = useState<"valid" | "unValid">("unValid");
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
