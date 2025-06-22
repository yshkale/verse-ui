import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export const Landing = () => {
  return (
    <main className="flex flex-col min-h-dvh">
      <Header />
      <Hero />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};
