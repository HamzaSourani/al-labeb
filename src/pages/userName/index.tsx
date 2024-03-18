import Keyboard from "@/components/ui/keyboard";
import { Key } from "@/components/ui/keyboard/type";
import Video from "@/components/ui/video";
import VideoPlaylist from "@/components/ui/videoPlayList";
import { useUserInfoContext } from "@/hooks/usUserEnfo";
import React, { useState } from "react";

const UserNamePage = () => {
  const [readEnteredCharacters, setReadEnteredCharacters] = useState(false);
  const [enteredKeys, setEnteredKeys] = useState<Key[]>([]);
  const { userInfo, handleAddInfo } = useUserInfoContext();
  console.log(userInfo);
  const handleSubmit = () => {
    setReadEnteredCharacters(true);
    handleAddInfo({
      key: "client_name",
      value: enteredKeys.map((key) => key.label).join(""),
    });
  };
  return (
    <div className="flex h-screen flex-col  items-center justify-around  md:flex-row">
      {readEnteredCharacters ? (
        <div className="basis-1/3">
          <VideoPlaylist
            videoSources={enteredKeys.map((key) => key.value)}
            nextUrl=""
          />
        </div>
      ) : (
        <>
          <div className="basis-1/3">
            <Video
              src="0"
              nextUrl="/al-labeb/user-name"
              previousUrl="/"
              disableNextButton={true}
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
