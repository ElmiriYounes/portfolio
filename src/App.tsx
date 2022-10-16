import React, { FC, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas, extend } from "@react-three/fiber";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import View from "./pages/View";
import { hostname } from "./datas/Variables";

const App: FC = () => {
  
  const [currentPath, setCurrentPath] = useState<string>("home");
  return (
    <Router>
      <Navbar setCurrentPath={setCurrentPath} currentPath={currentPath} />
      <Cursor />
      <Routes>
        <Route
          path={hostname}
          element={
            <View currentPath={currentPath} setCurrentPath={setCurrentPath} />
          }
        />
        {/* <Route path="/about-me" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
