import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallBack";
import NotFound from "./pages/NotFound";
import Branch from "./pages/Branch";
import MainLayout from "./layout/MainLayout";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Navigate to="/branch" replace />} />
              <Route path="branch" element={<Branch />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
