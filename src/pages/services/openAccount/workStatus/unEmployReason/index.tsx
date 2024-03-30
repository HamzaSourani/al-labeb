import Video from "@/components/ui/video";
import { useUserInfoContext } from "@/hooks/usUserInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import useValidation from "@/hooks/useValidation";

const UnEmployReasonPage = () => {
  const [selectedStatus, setSelectedStatus] = useState({
    videoSrc: "43",
    value: "",
  });
  const navigate = useNavigate();
  const isValid = useValidation(selectedStatus.videoSrc !== "43");

  const { handleAddInfo } = useUserInfoContext();
  const CLIENT_STATUSES = [
    { videoSrc: "43.1", value: "طالب" },
    { videoSrc: "43.2", value: "متقاعد" },
    { videoSrc: "43.3", value: "لا يعمل" },
  ];
  const handleNext = () => {
    handleAddInfo({ key: "client_status", value: selectedStatus.value });
    navigate("/al-labeb/open-account/end");
  };
  return (
    <div>
      <div className="flex justify-center gap-4">
        <div className="  md:w-1/2 lg:w-1/3 ">
          <Video
            src={selectedStatus.videoSrc}
            onNext={handleNext}
            validation={isValid}
            disableNextButton={isValid === "unValid"}
          />
        </div>
        <div className="flex max-h-[calc(100vh_-_120px)] snap-y snap-mandatory  flex-col gap-y-4 self-start overflow-auto ">
          {CLIENT_STATUSES.map((service) => (
            <div
              key={service.videoSrc}
              className={classNames(
                "snap-start border shadow transition-all hover:cursor-pointer",
                {
                  "border-primary ": service === selectedStatus,
                  "border-secondary ": service !== selectedStatus,
                },
              )}
              onClick={() => setSelectedStatus(service)}
            >
              <figure>
                <img
                  src={`/assets/images/thumbnail/${service.videoSrc}.png`}
                  className="aspect-square w-52 "
                  alt=""
                />
                <figcaption
                  className={classNames("py-2 text-center font-semibold", {
                    "text-primary ":
                      service.videoSrc === selectedStatus.videoSrc,
                    "text-secondary ":
                      service.videoSrc !== selectedStatus.videoSrc,
                  })}
                >
                  {service.value}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnEmployReasonPage;
