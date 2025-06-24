import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./components/Landing";
import { MainApp } from "./components/MainApp";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/app/:section/*" element={<MainApp />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;
