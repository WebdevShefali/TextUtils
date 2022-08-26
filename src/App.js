import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1600);
  }
  const toggleMode = () => {
 
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundImage =
        "linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )";
      document.getElementById("Textarea").style.backgroundColor =
        "rgba(237,246,250,1)";
        showAlert("Light mode has been enabled!");

    } else {
      setMode("dark");
      document.body.style.backgroundImage =
        "linear-gradient( 76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )";
      document.getElementById("Textarea").style.backgroundColor =
        "rgba(63,92,114)";
        showAlert("Dark mode has been enabled!");
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert mode={mode} toggleMode={toggleMode}  alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Textform mode={mode} toggleMode={toggleMode} showAlert={showAlert} />}
          />
          <Route
            exact
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} showAlert={showAlert} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
