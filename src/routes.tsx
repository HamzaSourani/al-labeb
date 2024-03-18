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
const UserLocationPage = lazy(
  () => import("@/pages/services/openAccount/location"),
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
const EndPage = lazy(() => import("@/pages/end"));
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LoadingPage />} />
        <Route path="al-labeb" element={<MainPage />}>
          <Route path="greeting" element={<GreetingPage />} />
          <Route path="user-name" element={<UserNamePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:id" element={<ConfirmServicePage />} />
          <Route path="open-account" element={<OpenAccountMainPage />} />
          <Route
            path="open-account/saving-account"
            element={<SavingAccountMainPage />}
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
            path="open-account/uer-location"
            element={<UserLocationPage />}
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
