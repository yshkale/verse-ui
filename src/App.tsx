import { Route, Routes } from "react-router";
import "./App.css";
import { Landing } from "./components/Landing";
import { MainApp } from "./components/MainApp";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="*" element={<Landing />} />
      <Route path="/app/:section" element={<MainApp />} />
    </Routes>
  );
}

export default App;
