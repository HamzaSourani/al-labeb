import { useState } from "react";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import VideoPlaylist from "@/components/ui/videoPlayList";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import useValidation from "@/hooks/useValidation";

const UserNamePage = () => {
  const [readEnteredCharacters, setReadEnteredCharacters] = useState(false);
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo } = useUserInfoContext();
  const isValid = useValidation(
    enteredKeys.length > 3 && enteredKeys.length < 50,
  );

  const handleSubmit = () => {
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
            nextUrl="/al-labeb/user-phone"
          />
        </div>
      ) : (
        <>
          <div className="basis-1/3">
            <Video
              src="47"
              onNext={handleSubmit}
              previousUrl="/"
              validation={isValid}
              disableNextButton={isValid === "unValid"}
            />
          </div>
          <Keyboard enteredKeys={enteredKeys} setEnteredKeys={setEnteredKeys} />
        </>
      )}
    </div>
  );
};

export default UserNamePage;
