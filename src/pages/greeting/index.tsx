import Video from "@/components/ui/video";

const GreetingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="md:w-1/2 lg:w-1/3 ">
        <Video src="0" nextUrl="/" previousUrl="user-name" />
      </div>
    </div>
  );
};

export default GreetingPage;
