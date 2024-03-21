import { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LoadingPage from "./pages/loading";
import MainPage from "./pages/main";
import Loading from "@/components/ui/loading";
const GreetingPage = lazy(() => import("@/pages/greeting"));
const UserNamePage = lazy(() => import("@/pages/userName"));
const UserPhoneNumberPage = lazy(() => import("@/pages/userPhoneNumber"));
const ServicesPage = lazy(() => import("@/pages/services"));
const ConfirmServicePage = lazy(
  () => import("@/pages/services/confirmService"),
);
const OpenAccountMainPage = lazy(
  () => import("@/pages/services/openAccount/main"),
);
const SavingAccountMainPage = lazy(
  () => import("@/pages/services/openAccount/savingAccount/main"),
);
const SavingAccountExplanation = lazy(
  () => import("@/pages/services/openAccount/savingAccount/explanation"),
);
const TermsAndConditionMainPage = lazy(
  () => import("@/pages/services/openAccount/termsAndConditions/main"),
);
const RefuseTermsAndConditionsPage = lazy(
  () => import("@/pages/services/openAccount/termsAndConditions/refuse"),
);
const NationalNumberMainPage = lazy(
  () => import("@/pages/services/openAccount/nationalNumber/main"),
);
const ExistAccountPage = lazy(
  () => import("@/pages/services/openAccount/nationalNumber/existAccount"),
);
const MotherFirstName = lazy(
  () => import("@/pages/services/openAccount/motherFirstName"),
);
const MotherLastNamePage = lazy(
  () => import("@/pages/services/openAccount/motherLastName"),
);
const MaritalStatusMainPage = lazy(
  () => import("@/pages/services/openAccount/maritalStatus/main"),
);
const SpouseFirstNamePage = lazy(
  () => import("@/pages/services/openAccount/maritalStatus/spouseFirstName"),
);
const SpouseLastNamePage = lazy(
  () => import("@/pages/services/openAccount/maritalStatus/spouseLastName"),
);
const NumberOfChildrenPage = lazy(
  () => import("@/pages/services/openAccount/maritalStatus/numberOfChildren"),
);
const HasHousePage = lazy(
  () => import("@/pages/services/openAccount/hasHouse"),
);
const UserAddressPage = lazy(
  () => import("@/pages/services/openAccount/address"),
);
const WorkStatusMainPage = lazy(
  () => import("@/pages/services/openAccount/workStatus/main"),
);
const UnEmployReasonPage = lazy(
  () => import("@/pages/services/openAccount/workStatus/unEmployReason"),
);
const WorkNamePage = lazy(
  () => import("@/pages/services/openAccount/workStatus/name"),
);
const WorkLocationPage = lazy(
  () => import("@/pages/services/openAccount/workStatus/location"),
);
const SalaryPage = lazy(
  () => import("@/pages/services/openAccount/workStatus/salary"),
);
const EndOpenAccountFlowPage = lazy(
  () => import("@/pages/services/openAccount/endFlow"),
);
const CheckNationalNumberPage = lazy(
  () => import("@/pages/services/depositOrWithdrawal/nationalNumber/main"),
);
const IBANPage = lazy(
  () => import("@/pages/services/depositOrWithdrawal/IBAN/main"),
);
const UnExistAccountPage = lazy(
  () =>
    import(
      "@/pages/services/depositOrWithdrawal/nationalNumber/unExistAccount"
    ),
);

const ReEnterNationalNumberPage = lazy(
  () =>
    import("@/pages/services/depositOrWithdrawal/IBAN/reEnterNationalNumber"),
);
const DepositMainPage = lazy(() => import("@/pages/services/deposit/main"));
const DepositSourcePage = lazy(
  () => import("@/pages/services/deposit/source/main"),
);
const FinancialBusinessIncomePage = lazy(
  () => import("@/pages/services/deposit/source/financialBusinessIncome"),
);
const DepositCausePage = lazy(() => import("@/pages/services/deposit/cause"));
const DepositAmountPage = lazy(() => import("@/pages/services/deposit/amount"));
const EndDepositFlowPage = lazy(
  () => import("@/pages/services/deposit/endFlow"),
);
const WithdrawalMainPage = lazy(
  () => import("@/pages/services/withdrawal/main"),
);
const WithdrawalCausePage = lazy(
  () => import("@/pages/services/withdrawal/cause/main"),
);
const PersonalExpensePage = lazy(
  () => import("@/pages/services/withdrawal/cause/personalExpense"),
);
const CommercialPurposePage = lazy(
  () => import("@/pages/services/withdrawal/cause/commercialPurpose"),
);
const WithdrawalAmountPage = lazy(
  () => import("@/pages/services/withdrawal/amount/main"),
);
const ExceedAmountPage = lazy(
  () => import("@/pages/services/withdrawal/amount/exceedAmount"),
);
const EndWithdrawalFlowPage = lazy(
  () => import("@/pages/services/withdrawal/endFlow"),
);
const EndPage = lazy(() => import("@/pages/end"));
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LoadingPage />} />
        <Route path="al-labeb" element={<MainPage />}>
          <Route path="greeting" element={<GreetingPage />} />
          <Route path="user-name" element={<UserNamePage />} />
          <Route path="user-phone" element={<UserPhoneNumberPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:id" element={<ConfirmServicePage />} />
          <Route path="open-account" element={<OpenAccountMainPage />} />
          <Route
            path="open-account/saving-account"
            element={<SavingAccountMainPage />}
          />
          <Route
            path="open-account/saving-account/explanation"
            element={<SavingAccountExplanation />}
          />
          <Route
            path="open-account/terms-and-conditions"
            element={<TermsAndConditionMainPage />}
          />
          <Route
            path="open-account/terms-and-conditions/refuse"
            element={<RefuseTermsAndConditionsPage />}
          />
          <Route
            path="open-account/national-number"
            element={<NationalNumberMainPage />}
          />
          <Route
            path="open-account/exist-account"
            element={<ExistAccountPage />}
          />
          <Route
            path="open-account/mother-first-name"
            element={<MotherFirstName />}
          />
          <Route
            path="open-account/mother-last-name"
            element={<MotherLastNamePage />}
          />
          <Route
            path="open-account/marital-status"
            element={<MaritalStatusMainPage />}
          />
          <Route
            path="open-account/marital-status/spouse-first-name"
            element={<SpouseFirstNamePage />}
          />
          <Route
            path="open-account/marital-status/spouse-last-name"
            element={<SpouseLastNamePage />}
          />
          <Route
            path="open-account/marital-status/number-of-children"
            element={<NumberOfChildrenPage />}
          />
          <Route path="open-account/has-house" element={<HasHousePage />} />
          <Route
            path="open-account/user-address"
            element={<UserAddressPage />}
          />
          <Route
            path="open-account/work-status"
            element={<WorkStatusMainPage />}
          />
          <Route
            path="open-account/work-status/un-employ"
            element={<UnEmployReasonPage />}
          />
          <Route
            path="open-account/work-status/name"
            element={<WorkNamePage />}
          />
          <Route
            path="open-account/work-status/location"
            element={<WorkLocationPage />}
          />
          <Route
            path="open-account/work-status/salary"
            element={<SalaryPage />}
          />
          <Route path="open-account/end" element={<EndOpenAccountFlowPage />} />
          <Route
            path="services/national-number"
            element={<CheckNationalNumberPage />}
          />
          <Route
            path="services/national-number/un-exist"
            element={<UnExistAccountPage />}
          />

          <Route path="services/IBAN" element={<IBANPage />} />
          <Route
            path="services/IBAN/re-enter-national-number"
            element={<ReEnterNationalNumberPage />}
          />
          <Route path="deposit" element={<DepositMainPage />} />
          <Route path="deposit/source" element={<DepositSourcePage />} />
          <Route
            path="deposit/source/financial-business-income"
            element={<FinancialBusinessIncomePage />}
          />
          <Route path="deposit/cause" element={<DepositCausePage />} />
          <Route path="deposit/amount" element={<DepositAmountPage />} />
          <Route path="deposit/end" element={<EndDepositFlowPage />} />

          <Route path="withdrawal" element={<WithdrawalMainPage />} />
          <Route path="withdrawal/cause" element={<WithdrawalCausePage />} />
          <Route
            path="withdrawal/cause/personal-expense"
            element={<PersonalExpensePage />}
          />
          <Route
            path="withdrawal/cause/commercial-purpose"
            element={<CommercialPurposePage />}
          />
          <Route path="withdrawal/amount" element={<WithdrawalAmountPage />} />
          <Route
            path="withdrawal/amount/exceed-amount"
            element={<ExceedAmountPage />}
          />
          <Route path="withdrawal/end" element={<EndWithdrawalFlowPage />} />

          <Route path="end" element={<EndPage />} />
        </Route>
      </Route>,
    ),
  );
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
