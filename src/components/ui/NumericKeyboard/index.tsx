import BackwardIcon from "@/components/svg/backward";
import NumericKeyboardProps, { Key } from "./type";
import DeleteIcon from "@/components/svg/delete";
import { Fragment } from "react/jsx-runtime";

const NumericKeyboard = ({
  enteredKeys,
  setEnteredKeys,
}: NumericKeyboardProps) => {
  const handleKeyPress = (key: Key) => {
    setEnteredKeys((pre) => [...pre, key]);
  };
  const HandleBackSpace = () => {
    enteredKeys.length && setEnteredKeys((pre) => pre.slice(0, pre.length - 1));
  };
  const handleDelete = () => {
    setEnteredKeys([]);
  };
  const keyboardLayout = [
    { value: "1", img: "/assets/images/letters/1.png" },
    { value: "2", img: "/assets/images/letters/2.png" },
    { value: "3", img: "/assets/images/letters/3.png" },

    { value: "4", img: "/assets/images/letters/4.png" },
    { value: "5", img: "/assets/images/letters/5.png" },
    { value: "6", img: "/assets/images/letters/6.png" },

    { value: "7", img: "/assets/images/letters/7.png" },
    { value: "8", img: "/assets/images/letters/8.png" },
    { value: "9", img: "/assets/images/letters/9.png" },
    {
      value: "",
      img: "",
      handleClick: HandleBackSpace,
      icon: (
        <BackwardIcon className="h-4  w-4 fill-secondary md:h-6 md:w-6 lg:h-7 lg:w-7" />
      ),
    },
    { value: "0", img: "/assets/images/letters/0.png" },

    {
      value: "",
      img: "",
      handleClick: handleDelete,
      icon: (
        <DeleteIcon className="h-4  w-4 fill-red-500 md:h-6 md:w-6 lg:h-7 lg:w-7" />
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex gap-x-4">
        <output className="min-h-12 w-96 rounded-lg  border  border-gray-300 px-4 py-2 text-lg font-semibold shadow-md">
          {enteredKeys.map((key) => key.value)}
        </output>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {keyboardLayout.map((key, index) => (
          <Fragment key={index}>
            {key.handleClick ? (
              <button
                className=" aspect-square rounded-lg border border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
                onClick={key.handleClick}
              >
                {key.icon}{" "}
              </button>
            ) : (
              <button
                className="relative aspect-square  rounded-lg border  border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
                onClick={() => handleKeyPress(key)}
              >
                <span className="inline-block h-4  w-4  md:h-6 md:w-6 lg:h-7 lg:w-7">
                  {key.value}
                </span>
                <span className="absolute -left-2 -top-3 h-9 w-9">
                  <img src={key.img} alt={key.value} />
                </span>
              </button>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default NumericKeyboard;
