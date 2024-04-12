import { useState } from "react";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import VideoPlaylist from "@/components/ui/videoPlayList";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";
import VideoWithKeyboard from "@/components/pages/videoWithKeyboard";
import pagesRoutes from "@/constants/pagesRoutes";

const UserNamePage = () => {
  const [readEnteredCharacters, setReadEnteredCharacters] = useState(false);
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo } = useUserInfoContext();
  const [isValid, setIsValid] = useValidation(
    enteredKeys.length > 3 && enteredKeys.length < 50,
  );

  const handleSubmit = () => {
    setIsValid("unValid");
    setReadEnteredCharacters(true);
    handleAddInfo({
      key: "client_name",
      value: enteredKeys.map((key) => key.label).join(""),
    });
  };
  return (
    <div className="flex flex-col  items-center justify-around  md:flex-row">
      {readEnteredCharacters ? (
        <div className="basis-1/3">
          <VideoPlaylist
            videoSources={enteredKeys.map((key) => key.value)}
            nextUrl={pagesRoutes.userName}
          />
        </div>
      ) : (
        <VideoWithKeyboard
          enteredKeys={enteredKeys}
          validation={isValid}
          videoNumber="47"
          setEnteredKeys={setEnteredKeys}
          handleNext={handleSubmit}
        />
      )}
    </div>
  );
};

export default UserNamePage;
