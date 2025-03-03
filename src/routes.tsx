import { useLocation, useParams, useResolvedPath } from "react-router-dom";
import { Monitoring } from "react-scan/monitoring"; // Import this first before React
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { FormPage } from "./pages/form";

export const AllRoutes = () => {
  const params = useParams(); // i.e { projectId: "123" }
  const { pathname } = useLocation(); // i.e /project/123/page

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form/:formId" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Monitoring
        apiKey="BwexguVOBSqtm7G07aK5hgIk9VbUqeVM" // Safe to expose publically
        url="https://monitoring.react-scan.com/api/v1/ingest"
        commit={import.meta.env.REACT_APP_VERCEL_GIT_COMMIT_SHA} // optional but recommended
        branch={import.meta.env.REACT_APP_VERCEL_GIT_COMMIT_REF} // optional but recommended
        params={params}
        path={pathname}
      />
    </>
  );
};
