import KeyboardProps, { Key } from "./type";

const Keyboard = ({ enteredKeys, setEnteredKeys, onSubmit }: KeyboardProps) => {
  const handleKeyPress = (key: Key) => {
    setEnteredKeys((pre) => [...pre, key]);
  };

  const keyboardLayout = [
    [
      { label: "ض", value: "dad" },
      { label: "ص", value: "sad" },
      { label: "ث", value: "tha" },
      { label: "ق", value: "kaf" },
      { label: "ف", value: "fa" },
      { label: "غ", value: "ghayn" },
      { label: "ع", value: "ayn" },
      { label: "ه", value: "ha" },
      { label: "خ", value: "khah" },
      { label: "ح", value: "ha" },
      { label: "ج", value: "jeem" },
    ],
    [
      { label: "ش", value: "shin" },
      { label: "س", value: "sen" },
      { label: "ي", value: "ya" },
      { label: "ب", value: "ba" },
      { label: "ل", value: "la" },
      { label: "ا", value: "alef" },
      { label: "ت", value: "ta" },
      { label: "ن", value: "non" },
      { label: "م", value: "meem" },
      { label: "ك", value: "kaf" },
    ],
    [
      { label: "ظ", value: "tha" },
      { label: "ط", value: "tah" },
      { label: "ذ", value: "zal" },
      { label: "د", value: "dal" },
      { label: "ز", value: "thah" },
      { label: "ر", value: "ra" },
      { label: "و", value: "wa" },
      { label: "ئ", value: "yehHamzeh" },
    ],
    [
      { label: "أ", value: "alefHamzeh" },
      { label: "آ", value: "alefMedeh" },
      { label: "ال", value: "al" },
      { label: "ء", value: "hamzeh" },
      { label: "ؤ", value: "wawHamzeh" },
      { label: "ي", value: "ya" },
    ],
  ];

  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex gap-x-4">
        <button
          className="mr-2 h-12 w-12  rounded-lg bg-gray-200 text-center text-xl shadow hover:bg-gray-300"
          onClick={onSubmit}
        >
          تم
        </button>
        <output className="min-h-12  w-96  rounded-lg border border-gray-300 px-4 py-2 shadow-md">
          {enteredKeys.map((key) => key.label)}
        </output>
      </div>
      <div className="p-4">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="mb-2 flex justify-center">
            {row.map((key, keyIndex) => (
              <input
                key={keyIndex}
                type="button"
                className="mr-2 h-12  w-12 rounded-lg bg-gray-200 text-center text-xl shadow hover:bg-gray-300"
                value={key.label}
                onClick={() => handleKeyPress(key)}
              />
            ))}
          </div>
        ))}
        <div className="flex justify-center">
          <input
            type="button"
            className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
            value={"رجوع"}
            onClick={() => {
              enteredKeys.length &&
                setEnteredKeys((pre) => pre.slice(0, pre.length - 1));
            }}
          />
          <input
            type="button"
            className="mr-2 h-12 w-12 grow rounded-lg bg-gray-200 text-center text-xl shadow hover:bg-gray-300"
            value={""}
            onClick={() => handleKeyPress({ label: " ", value: "space" })}
          />

          <input
            type="button"
            className="mr-2 rounded-lg bg-gray-200 px-4 text-center text-xl shadow hover:bg-gray-300"
            value={"حذف"}
            onClick={() => {
              setEnteredKeys([]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
