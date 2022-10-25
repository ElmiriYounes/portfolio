import React, { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import View from "./pages/View";
import { hostname } from "./datas/Variables";
import Email from "./components/email/Email";

const App: FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [open, currentPath]);

  return (
    <Router>
      <Navbar
        setCurrentPath={setCurrentPath}
        currentPath={currentPath}
        open={open}
        setOpen={setOpen}
      />
      <Cursor />
      <Email />
      <Routes>
        <Route
          path={hostname}
          element={
            <View
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
              setOpen={setOpen}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
