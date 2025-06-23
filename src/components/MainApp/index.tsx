import { useParams } from "react-router";
import { Navigation } from "../Navigation";
import { Header } from "../Landing/components/Header";
import { Introduction } from "../Content/introduction";

export const MainApp = () => {
  const { section } = useParams();

  return (
    <main>
      <Header />
      <div className="flex gap-28 mt-8">
        <Navigation />
        {section === "getting-started" && <Introduction />}
      </div>
    </main>
  );
};
