import Video from "@/components/ui/video";
import { useState } from "react";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState("2");
  const SERVICES = ["3", "4", "40"];

  return (
    <div>
      <div className="flex h-screen  items-center justify-center gap-4">
        <div className="md:w-1/3 lg:w-1/2 ">
          <Video
            src={selectedService}
            nextUrl={selectedService}
            previousUrl="/"
            disableNextButton={selectedService === "2"}
          />
        </div>
        <div className="flex flex-col gap-y-4 ">
          {SERVICES.map((service) => (
            <div key={service} onClick={() => setSelectedService(service)}>
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

export default ServicesPage;
