import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import HomePage from "./components/HomePage.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
