import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const UnEmployReasonPage = () => {
  const [selectedService, setSelectedService] = useState({
    videoSrc: "43",
    value: "",
  });
  const navigate = useNavigate();
  const { handleAddInfo } = useUserInfoContext();
  const CLIENT_STATUSES = [
    { videoSrc: "43.1", value: "طالب" },
    { videoSrc: "43.2", value: "متقاعد" },
    { videoSrc: "43.3", value: "لا يعمل" },
  ];
  const handleNext = () => {
    handleAddInfo({ key: "client_status", value: selectedService.value });
    navigate("/al-labeb/open-account/end");
  };
  return (
    <div>
      <div className="flex   items-center justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedService.videoSrc}
            onNext={handleNext}
            previousUrl="/"
            disableNextButton={selectedService.videoSrc === "43"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {CLIENT_STATUSES.map((service) => (
            <div
              key={service.videoSrc}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": service === selectedService,
                  "border-secondary ": service !== selectedService,
                },
              )}
              onClick={() => setSelectedService(service)}
            >
              <video
                src={`/assets/videos/${service}.mp4`}
                className="aspect-square w-52 "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnEmployReasonPage;
