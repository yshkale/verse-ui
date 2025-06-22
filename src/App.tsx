import { Route, Routes } from "react-router";
import "./App.css";
import { Landing } from "./components/Landing";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
  );
}

export default App;
