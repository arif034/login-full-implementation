import { useState } from "react";
import Navbar from "./Navbar.js";
function HomePage() {
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
      <Navbar />
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
export default HomePage;
