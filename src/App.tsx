import { Route, Routes } from "react-router";
import "./App.css";
import { Landing } from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}

export default App;
