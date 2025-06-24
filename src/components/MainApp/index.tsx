import { Routes, Route, useParams } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Header } from "../Landing/components/Header";
import { ContentRenderer } from "./components/ContentRenderer";

export const MainApp = () => {
  const { section } = useParams();

  return (
    <main>
      <Header />
      <div className="flex gap-28 mt-8">
        <Navigation currentSection={section} />
        <div className="flex-1">
          <Routes>
            <Route
              path="introduction"
              element={<ContentRenderer type="introduction" />}
            />
            <Route
              path="installation"
              element={<ContentRenderer type="installation" />}
            />
            <Route path="button" element={<ContentRenderer type="button" />} />
            <Route path="badge" element={<ContentRenderer type="badge" />} />
            <Route
              index
              element={<ContentRenderer type="default" section={section} />}
            />
          </Routes>
        </div>
      </div>
    </main>
  );
};
