import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key } from "@/components/ui/NumericKeyboard/type";
import NumericKeyboard from "@/components/ui/NumericKeyboard";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const EmployPasswordPage = () => {
  const [password, setPassword] = useState<Key[]>([]);
  const navigate = useNavigate();
  const { handleAuthorization } = useUserInfoContext();
  const handleSubmit = () => {
    if (password.map((key) => key.value).join("") === "123456") {
      handleAuthorization(true);
      navigate("/al-labeb/pdf-files");
    } else {
      alert("الرجاء إدخال كملة مرور صحيحة");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <NumericKeyboard enteredKeys={password} setEnteredKeys={setPassword} />
      <button
        className=" rounded-lg border border-primary bg-gray-200 px-4 py-2 text-center text-xl shadow transition-colors hover:bg-gray-300"
        onClick={handleSubmit}
      >
        إرسال
      </button>
    </div>
  );
};

export default EmployPasswordPage;
