import { Routes, Route, useParams } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Header } from "../Landing/components/Header";
import { ContentRenderer } from "./components/ContentRenderer";
import { RightNav } from "./components/RightNav";

export const MainApp = () => {
  const { section } = useParams();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex justify-between gap-20 mt-8 px-4 md:px-0">
        <Navigation currentSection={section} />
        <div className="flex-1 w-full md:w-auto">
          <Routes>
            <Route
              path="introduction"
              element={<ContentRenderer type="introduction" />}
            />
            <Route
              path="installation"
              element={<ContentRenderer type="installation" />}
            />
            <Route path="alert" element={<ContentRenderer type="alert" />} />
            <Route path="button" element={<ContentRenderer type="button" />} />
            <Route path="badge" element={<ContentRenderer type="badge" />} />
            <Route path="card" element={<ContentRenderer type="card" />} />
            <Route
              index
              element={<ContentRenderer type="default" section={section} />}
            />
          </Routes>
        </div>
        <RightNav />
      </div>
    </main>
  );
};
