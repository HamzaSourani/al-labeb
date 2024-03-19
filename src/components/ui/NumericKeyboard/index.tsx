import NumericKeyboardProps from "./type";

const NumericKeyboard = ({
  enteredKeys,
  setEnteredKeys,
  onSubmit,
}: NumericKeyboardProps) => {
  const handleKeyPress = (key: string) => {
    setEnteredKeys((pre) => pre + key);
  };

  const keyboardLayout = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0"],
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
          {enteredKeys}
        </output>
      </div>
      <div className="flex items-start p-4 ">
        <div>
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-2 flex justify-center">
              {row.map((key, keyIndex) => (
                <input
                  key={keyIndex}
                  type="button"
                  className="mr-2 h-12 w-12 rounded-lg bg-gray-200 text-center text-xl shadow hover:bg-gray-300"
                  value={key}
                  onClick={() => handleKeyPress(key)}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mb-2 flex flex-col gap-y-4">
          <input
            type="button"
            className="mr-2 rounded-lg bg-gray-200 px-4 py-2 text-center text-xl shadow hover:bg-gray-300"
            value={"رجوع"}
            onClick={() => {
              enteredKeys.length &&
                setEnteredKeys((pre) => pre.slice(0, pre.length - 1));
            }}
          />
          <input
            type="button"
            className="mr-2 rounded-lg bg-gray-200 px-4 py-2 text-center text-xl shadow hover:bg-gray-300"
            value={"حذف"}
            onClick={() => {
              setEnteredKeys("");
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default NumericKeyboard;
