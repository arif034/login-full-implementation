import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contacts from "./components/Contacts.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import { useState } from "react";
export default function App() {
  const [showsignup, setShowsignup] = useState(true);
  const [showsignin, setShowsignin] = useState(true);
  const login_text =
    showsignin === true ? `sign-in-text-show` : `sign-in-text-hide`;
  const signup_text =
    showsignup === true ? `sign-up-text-show` : `sign-in-text-hide`;
  const login_button =
    showsignin === true ? `sign-in-button-show` : `sign-in-button-hide`;
  const signup_button =
    showsignup === true ? `sign-up-button-show` : `sign-up-button-hide`;
  const onSignup = () => {
    setShowsignin(!showsignin);
  };

  const onSignin = () => {
    setShowsignup(!showsignup);
  };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
      <div className={signup_text}>
        Signup if you dont have an account already
      </div>
      <button className={signup_button} onClick={onSignup}>
        SignUp
      </button>
      <div className={login_text}>Click SignIn to login to your account</div>
      <button className={login_button} onClick={onSignin}>
        SignIn
      </button>
    </div>
  );
}
