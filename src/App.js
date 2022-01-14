import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
