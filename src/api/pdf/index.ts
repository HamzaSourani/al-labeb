import API_ROUTES from "@/constants/apiRoutes";
import API_INSTANCE from "../instance";
import {
  GetPdfNamesParams,
  GetPdfNamesReturnValue,
  GetPdfParams,
} from "./type";

const getPdfNames = async (params: GetPdfNamesParams) => {
  try {
    const { data } = await API_INSTANCE.get<GetPdfNamesReturnValue>(
      API_ROUTES.RETRIEVE_PDF_NAMES,
      {
        params,
      },
    );
    return data;
  } catch (error) {}
};
const getPdf = async (params: GetPdfParams) => {
  try {
    const { data } = await API_INSTANCE.get(API_ROUTES.RETRIEVE_PDF, {
      params,
    });
    return data;
  } catch (error) {}
};
export { getPdfNames, getPdf };
