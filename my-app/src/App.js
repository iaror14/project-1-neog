import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Landing } from "./landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
