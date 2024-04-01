import BackwardIcon from "@/components/svg/backward";
import DeleteIcon from "@/components/svg/delete";
import KeyboardProps, { Key } from "./type";
import { Fragment } from "react/jsx-runtime";
import classNames from "classnames";

const Keyboard = ({ enteredKeys, setEnteredKeys }: KeyboardProps) => {
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
    { label: "ج", value: "jeem", img: "/assets/images/letters/jeem.png" },
    { label: "ح", value: "haa", img: "/assets/images/letters/haa.png" },
    { label: "خ", value: "kha", img: "/assets/images/letters/kha.png" },
    { label: "ه", value: "ha", img: "/assets/images/letters/ha.png" },
    { label: "ع", value: "ayn", img: "/assets/images/letters/ayn.png" },
    { label: "غ", value: "ghayn", img: "/assets/images/letters/ghayn.png" },
    { label: "ف", value: "fa", img: "/assets/images/letters/fa.png" },
    { label: "ق", value: "kaf", img: "/assets/images/letters/kaf.png" },
    { label: "ث", value: "tha", img: "/assets/images/letters/tha.png" },
    { label: "ص", value: "sad", img: "/assets/images/letters/sad.png" },
    { label: "ض", value: "dad", img: "/assets/images/letters/dad.png" },

    { label: "ط", value: "tah", img: "/assets/images/letters/tah.png" },
    { label: "ك", value: "ka", img: "/assets/images/letters/ka.png" },
    { label: "م", value: "meem", img: "/assets/images/letters/meem.png" },
    { label: "ن", value: "non", img: "/assets/images/letters/non.png" },
    { label: "ت", value: "ta", img: "/assets/images/letters/ta.png" },
    { label: "ا", value: "alef", img: "/assets/images/letters/alef.png" },
    { label: "ل", value: "la", img: "/assets/images/letters/la.png" },
    { label: "ب", value: "ba", img: "/assets/images/letters/ba.png" },
    { label: "ي", value: "ya", img: "/assets/images/letters/ya.png" },
    { label: "س", value: "sen", img: "/assets/images/letters/sen.png" },
    { label: "ش", value: "shin", img: "/assets/images/letters/shin.png" },

    { label: "د", value: "dal", img: "/assets/images/letters/dal.png" },
    { label: "ظ", value: "thah", img: "/assets/images/letters/thah.png" },
    { label: "و", value: "wa", img: "/assets/images/letters/wa.png" },
    { label: "ز", value: "za", img: "/assets/images/letters/za.png" },
    { label: "ة", value: "teh", img: "/assets/images/letters/teh.png" },
    { label: "ى", value: "yaa", img: "/assets/images/letters/yaa.png" },
    { label: "ر", value: "ra", img: "/assets/images/letters/ra.png" },
    {
      label: "ؤ",
      value: "waHamzeh",
      img: "/assets/images/letters/waHamzeh.png",
    },
    { label: "ء", value: "hamzeh", img: "/assets/images/letters/hamzeh.png" },
    { label: "ذ", value: "zal", img: "/assets/images/letters/zal.png" },
    { label: "لا", value: "laa", img: "/assets/images/letters/laa.png" },
    {
      label: "",
      value: "",
      img: "",
      handleClick: HandleBackSpace,
      icon: (
        <BackwardIcon className="h-4  w-4 fill-secondary md:h-6 md:w-6 lg:h-7 lg:w-7" />
      ),
    },
    {
      label: "أ",
      value: "alefHamzeh",
      img: "/assets/images/letters/alefHamzeh.png",
    },
    {
      label: "آ",
      value: "alefMadeh",
      img: "/assets/images/letters/alefMadeh.png",
    },
    {
      label: " ",
      value: "space",
      img: "/assets/images/letters/space.png",
      span: true,
    },
    { label: "ال", value: "al", img: "/assets/images/letters/al.png" },
    {
      label: "ئ",
      value: "yaaHamzeh",
      img: "/assets/images/letters/yaHamzeh.png",
    },
    {
      label: "",
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
        <output className="min-h-12 w-96 rounded-lg border border-secondary  px-4 py-2 text-lg font-semibold shadow-sm">
          {enteredKeys.map((key) => key.label)}
        </output>
      </div>
      <div className="grid grid-cols-11 gap-3 p-4">
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
                className={classNames(
                  "relative aspect-square  rounded-lg border  border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300",
                  {
                    " col-span-5 aspect-auto": key.span,
                  },
                )}
                onClick={() => handleKeyPress(key)}
              >
                <span className="inline-block h-4  w-4  md:h-6 md:w-6 lg:h-7 lg:w-7">
                  {key.label}
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

export default Keyboard;
