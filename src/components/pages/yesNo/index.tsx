import Video from "@/components/ui/video";
import { YesNoProps } from "./type";

const YesNo = ({
  videoNumber,
  handlePositiveCase,
  handleNegativeCase,
}: YesNoProps) => {
  return (
    <div className="flex  flex-col items-center  justify-center gap-y-4">
      <div className="rounded-lg border border-secondary  shadow  shadow-shadow md:w-1/2 lg:w-1/3 ">
        <Video src={videoNumber} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={handlePositiveCase}
          className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
        >
          <img
            className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10"
            src="/assets/images/yes.png"
            alt="yes"
          />
        </button>
        <button
          onClick={handleNegativeCase}
          className="mr-2 rounded-lg  border border-primary bg-gray-200 p-2 px-4 text-center text-xl shadow  hover:bg-gray-300"
        >
          <img
            className="h-6 w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10"
            src="/assets/images/no.png"
            alt="no"
          />
        </button>
      </div>
    </div>
  );
};

export default YesNo;
