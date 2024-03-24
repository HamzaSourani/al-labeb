import BackwardIcon from "@/components/svg/backward";
import DeleteIcon from "@/components/svg/delete";
import KeyboardProps, { Key } from "./type";

const Keyboard = ({ enteredKeys, setEnteredKeys, onSubmit }: KeyboardProps) => {
  const handleKeyPress = (key: Key) => {
    setEnteredKeys((pre) => [...pre, key]);
  };

  const keyboardLayout = [
    [
      { label: "ض", value: "dad", img: "/assets/letters/dad.png" },
      { label: "ص", value: "sad", img: "/assets/letters/sad.png" },
      { label: "ث", value: "tha", img: "/assets/letters/tha.png" },
      { label: "ق", value: "kaf", img: "/assets/letters/kaf.png" },
      { label: "ف", value: "fa", img: "/assets/letters/fa.png" },
      { label: "غ", value: "ghayn", img: "/assets/letters/ghayn.png" },
      { label: "ع", value: "ayn", img: "/assets/letters/ayn.png" },
      { label: "ه", value: "ha", img: "/assets/letters/ha.png" },
      { label: "خ", value: "kha", img: "/assets/letters/kha.png" },
      { label: "ح", value: "haa", img: "/assets/letters/haa.png" },
      { label: "ج", value: "jeem", img: "/assets/letters/jeem.png" },
    ],
    [
      { label: "ش", value: "shin", img: "/assets/letters/shin.png" },
      { label: "س", value: "sen", img: "/assets/letters/sen.png" },
      { label: "ي", value: "ya", img: "/assets/letters/ya.png" },
      { label: "ب", value: "ba", img: "/assets/letters/ba.png" },
      { label: "لا", value: "laa", img: "/assets/letters/laa.png" },
      { label: "ل", value: "la", img: "/assets/letters/la.png" },
      { label: "ا", value: "alef", img: "/assets/letters/alef.png" },
      { label: "ت", value: "ta", img: "/assets/letters/ta.png" },
      { label: "ن", value: "non", img: "/assets/letters/non.png" },
      { label: "م", value: "meem", img: "/assets/letters/meem.png" },
    ],
    [
      { label: "ك", value: "ka", img: "/assets/letters/ka.png" },
      { label: "ظ", value: "thah", img: "/assets/letters/thah.png" },
      { label: "ط", value: "tah", img: "/assets/letters/tah.png" },
      { label: "ذ", value: "zal", img: "/assets/letters/zal.png" },
      { label: "د", value: "dal", img: "/assets/letters/dal.png" },
      { label: "ز", value: "za", img: "/assets/letters/za.png" },
      { label: "ر", value: "ra", img: "/assets/letters/ra.png" },
      { label: "و", value: "wa", img: "/assets/letters/wa.png" },
      { label: "ة", value: "teh", img: "/assets/letters/teh.png" },
    ],
    [
      {
        label: "أ",
        value: "alefHamzeh",
        img: "/assets/letters/alefHamzeh.png",
      },
      { label: "آ", value: "alefMadeh", img: "/assets/letters/alefMadeh.png" },
      { label: "ال", value: "al", img: "/assets/letters/al.png" },
      { label: "ء", value: "hamzeh", img: "/assets/letters/hamzeh.png" },
      { label: "ؤ", value: "waHamzeh", img: "/assets/letters/waHamzeh.png" },
      { label: "ي", value: "ya", img: "/assets/letters/ya.png" },
      { label: "ى", value: "yaa", img: "/assets/letters/yaa.png" },
      { label: "ئ", value: "yaaHamzeh", img: "/assets/letters/yaHamzeh.png" },
    ],
  ];

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex gap-x-4">
        {/* <button
          className="mr-2 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-200 text-center text-xl shadow transition-all hover:scale-105 hover:bg-gray-300"
          onClick={onSubmit}
        >
          <CheckIcon className="h-6  w-6 fill-primary md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </button> */}
        <output className="min-h-12 w-96 rounded-lg  border border-secondary px-4 py-2 shadow-sm">
          {enteredKeys.map((key) => key.label)}
        </output>
      </div>
      <div className="p-4">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-2 flex justify-center">
            {row.map((key, keyIndex) => (
              <div className="relative" key={keyIndex}>
                <span className="absolute -left-2 -top-3 h-9 w-9">
                  <img src={key.img} alt={key.value} />
                </span>
                <input
                  type="button"
                  className="mr-2 h-12 w-12 rounded-lg  border border-primary bg-gray-200 text-center text-xl shadow hover:bg-gray-300"
                  value={key.label}
                  onClick={() => handleKeyPress(key)}
                />
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-center">
          <button
            className="mr-2 rounded-lg border border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
            onClick={() => {
              enteredKeys.length &&
                setEnteredKeys((pre) => pre.slice(0, pre.length - 1));
            }}
          >
            <BackwardIcon className="h-4  w-4 fill-secondary md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </button>
          <input
            type="button"
            className="mr-2 h-12 w-12 grow rounded-lg border border-primary bg-gray-200 text-center text-xl shadow hover:bg-gray-300"
            value={""}
            onClick={() => handleKeyPress({ label: " ", value: "space" })}
          />

          <button
            className="mr-2 rounded-lg border border-primary bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
            onClick={() => {
              setEnteredKeys([]);
            }}
          >
            <DeleteIcon className="h-4  w-4 fill-red-500 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
