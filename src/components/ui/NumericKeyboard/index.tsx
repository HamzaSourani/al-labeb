import BackwardIcon from "@/components/svg/backward";
import NumericKeyboardProps, { Key } from "./type";
import DeleteIcon from "@/components/svg/delete";

const NumericKeyboard = ({
  enteredKeys,
  setEnteredKeys,
}: NumericKeyboardProps) => {
  const handleKeyPress = (key: Key) => {
    setEnteredKeys((pre) => [...pre, key]);
  };

  const keyboardLayout = [
    [
      { value: "1", img: "/assets/images/letters/1.png" },
      { value: "2", img: "/assets/images/letters/2.png" },
      { value: "3", img: "/assets/images/letters/3.png" },
    ],
    [
      { value: "4", img: "/assets/images/letters/4.png" },
      { value: "5", img: "/assets/images/letters/5.png" },
      { value: "6", img: "/assets/images/letters/6.png" },
    ],
    [
      { value: "7", img: "/assets/images/letters/7.png" },
      { value: "8", img: "/assets/images/letters/8.png" },
      { value: "9", img: "/assets/images/letters/9.png" },
    ],
  ];

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex gap-x-4">
        <output className="min-h-12  w-96  rounded-lg border border-gray-300 px-4 py-2 shadow-md">
          {enteredKeys.map((key) => key.value)}
        </output>
      </div>
      <div className="flex items-start p-4 ">
        <div>
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-2 flex justify-center">
              {row.map((key, keyIndex) => (
                <button
                  key={keyIndex}
                  className="relative mr-2 aspect-square grow rounded-lg border  border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
                  onClick={() => handleKeyPress(key)}
                >
                  <span className="inline-block h-4  w-4  md:h-6 md:w-6 lg:h-7 lg:w-7">
                    {key.value}
                  </span>
                  <span className="absolute -left-2 -top-3 h-9 w-9">
                    <img src={key.img} alt={key.value} />
                  </span>
                </button>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <button
              className="mr-2 aspect-square rounded-lg border border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
              onClick={() => {
                enteredKeys.length &&
                  setEnteredKeys((pre) => pre.slice(0, pre.length - 1));
              }}
            >
              <BackwardIcon className="h-4  w-4 fill-secondary md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </button>
            <button
              className="relative mr-2 rounded-lg border  border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
              onClick={() =>
                handleKeyPress({
                  value: "0",
                  img: "/assets/images/letters/0.png",
                })
              }
            >
              <span className="inline-block h-4  w-4  md:h-6 md:w-6 lg:h-7 lg:w-7">
                0{" "}
              </span>
              <span className="absolute -left-2 -top-3 h-9 w-9">
                <img src={"/assets/images/letters/0.png"} alt={"0"} />
              </span>
            </button>

            <button
              className="mr-2 rounded-lg border border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
              onClick={() => {
                setEnteredKeys([]);
              }}
            >
              <DeleteIcon className="h-4  w-4 fill-red-500 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NumericKeyboard;
