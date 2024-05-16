//@ts-nocheck
import { useNavigate } from "react-router-dom";
import SingleVideo from "@/components/pages/singleVideo";
import pagesRoutes from "@/constants/pagesRoutes";

// const App = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState("javascript");
//   const handleChange = (e) => {
//     setSelectedLanguage(e.target.value);
//   };
//   return (
//     <>
//       <RadioOption
//         name={"programmingLanguage"}
//         checked={selectedLanguage === "javascript"}
//         value={"javascript"}
//         handleChange={handleChange}
//       />
//       <RadioOption
//         name={"programmingLanguage"}
//         checked={selectedLanguage === "python"}
//         value={"python"}
//         handleChange={handleChange}
//       />
//       <RadioOption
//         name={"programmingLanguage"}
//         checked={selectedLanguage === "c++"}
//         value={"c++"}
//         handleChange={handleChange}
//       />
//     </>
//   );
// };

// Code after refactor

const GreetingPage = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate(pagesRoutes.userName);
  };
  return (
    <SingleVideo videoNumber="1" handleNext={handleNext} validation="unSet" />
  );
};

export default GreetingPage;
