import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import VideoPlaylist from "@/components/ui/videoPlayList";
import { useUserInfoContext } from "@/hooks/usUserInfo";

const UserNamePage = () => {
  const [readEnteredCharacters, setReadEnteredCharacters] = useState(false);
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { handleAddInfo } = useUserInfoContext();
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/al-labeb/user-phone");
  };
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
              // disableNextButton={true}
            />
          </div>
          <Keyboard
            enteredKeys={enteredKeys}
            setEnteredKeys={setEnteredKeys}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default UserNamePage;
