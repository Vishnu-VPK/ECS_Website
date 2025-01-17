import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "../../firebase";

import styles from "./SignUp.module.css";

function SignUp(props) {
  //const history=useHistory();
  const {setCurrentUser,setSignup,setOpenLogin}=props;
  const navigate = useNavigate();
  const [values, setValues] = useState({//function to setup form details
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    ////validation for ece.nits.ac.in
      let atpos = values.email.indexOf("@");
      let domain = values.email.split("@")[1]; 
    if(atpos<1 || domain!=="ece.nits.ac.in"){
      setErrorMsg("Only ECE valid");
      return;
    }
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    /////creating new user after validating 
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        setCurrentUser(auth.currentUser);
        setSignup(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        if (err.code === 'auth/email-already-in-use') {
            setErrorMsg('Email Already in Use');
          }else{
            setErrorMsg(err.message);
          }
        
      });
  };
  const handleClick=()=>{
    setSignup(false);
    setOpenLogin(true);
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          type={"text"}
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          type={"email"}
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          type={"password"}
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <button className={styles.cancel} onClick={()=>{setSignup(false)}}>
            Cancel
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <a href="#"onClick={handleClick}>Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;