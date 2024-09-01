import { useEffect, useState } from "react";
import { getPdfNames } from "@/api/pdf";
import SpinnerIcon from "@/components/svg/spiner";
import { baseURL } from "@/constants/domain";
import API_ROUTES from "@/constants/apiRoutes";
import pdf from "@/assets/images/pdf.png";
const tableHeader = ["اسم الخدمة", "العملية", "التاريخ", "الوقت"];

const PdfFilesPage = () => {
  const [pdfNames, setPdfNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isLoadingPdf, setIsLoadingPdf] = useState(false);
  const [isTherePdf, setIsTherePdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const getPdfNamesHandler = async (national_id: string) => {
    setLoading(true);
    const pdfFilesName = await getPdfNames({
      national_id,
    });
    setPdfNames(pdfFilesName?.pdf_files ?? []);
    setLoading(false);
  };

  useEffect(() => {
    const nationalId = localStorage.getItem("national_id");
    nationalId && getPdfNamesHandler(nationalId);
  }, []);

  const enArServiceConverter = (service: string) => {
    switch (service) {
      case "deposit":
        return "إيداع";
      case "withdrawal":
        return "سحب";
      case "open account":
        return  "فتح حساب التوفير";
    }
  };
  return (
    <div className="grid  grid-cols-2 justify-center gap-8 px-16 ">
      <div className="w-[600px]">
        <table className="max-h-[600px]  overflow-auto">
          <th className="  grid grid-cols-4 gap-2">
            {tableHeader.reverse().map((head) => (
              <th key={head} className="text-primary">
                {head}
              </th>
            ))}
            <tbody className="w-[600px]">
              <div className="w-full border-b border-secondary"></div>
              {loading ? (
                <div className="my-8 flex justify-center">
                  <SpinnerIcon className=" h-12 w-12 animate-spin" />
                </div>
              ) : (
                pdfNames.map((pdfName) => {
                  return (
                    <tr
                      onClick={() => {
                        setIsTherePdf(true);
                        if (isLoadingPdf) {
                          alert("الرجاء الانتظار لحين تحميل الpdf");
                        } else {
                          setPdfUrl(
                            `${baseURL}${API_ROUTES.RETRIEVE_PDF}?pdf_name=${pdfName}`,
                          );
                        }
                      }}
                      className=" grid w-full grid-cols-4 gap-2 transition-colors hover:cursor-pointer hover:bg-slate-100 [&:not(last-of-type)]:mb-2 "
                    >
                      {pdfName.split("_").map((pdfDetails, index) => (
                        <td key={pdfDetails}>
                          {index === 1
                            ? enArServiceConverter(pdfDetails)
                            :index===3? pdfDetails.replace(".pdf",""):pdfDetails}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </th>
        </table>
      </div>
      {isTherePdf ? (
        <object
          data={pdfUrl}
          type="application/pdf"
          className="h-full w-full"
          onLoadStart={() => {
            setIsLoadingPdf(true);
          }}
          onLoad={() => {
            setIsLoadingPdf(false);
          }}
        >
          <p>
            PDF cannot be displayed. Please{" "}
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              download it here
            </a>
            .
          </p>
        </object>
      ) : (
        <div className="flex items-center justify-center">
          <img src={pdf} className="h-[500px]" alt="pdf" />
        </div>
      )}
    </div>
  );
};

export default PdfFilesPage;
