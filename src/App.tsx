import { Route, Routes } from "react-router-dom";
import { NaveBar } from "./Components";
import { Home, Category } from "./Pages";
import "./App.css";

function App() {
  return (
    <>
      <NaveBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
