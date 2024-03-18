import Video from "@/components/ui/video";

const GreetingPage = () => {
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="0" nextUrl="/al-labeb/user-name" previousUrl="/" />
      </div>
    </div>
  );
};

export default GreetingPage;
