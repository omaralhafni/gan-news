import { Route, Routes } from "react-router-dom";
import { NaveBar } from "./Components";
import { Home, Category } from "./Pages";
import "./main.css";

function App() {
  return (
    <div>
      <NaveBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
