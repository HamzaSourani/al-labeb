import React, { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import LoadingPage from "./pages/loading";
import MainPage from "./pages/main";
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LoadingPage />} />
        <Route path="al-labeb" element={<MainPage />}></Route>
      </Route>,
    ),
  );
  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
