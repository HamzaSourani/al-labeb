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
const ConfirmServicePage = lazy(() => import("@/pages/confirmService"));
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
