import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // check whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-danger");
  // };

  const enableToggleMode = () => {
    //console.log(cls);
    //document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={enableToggleMode}
          btnText="Toggle Mode"
          aboutText="About"
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
