import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("http://localhost:5000/auth/signup", {
          name: name,
          email: email,
          password: password,
        })
        .catch((err) => {
          setErrors(err.response.data.Message);
          console.log(err);
        });
      console.log(res);
      setIsSignIn(true);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="acc">
      <div className="accCard">
        <h3>Sign Up</h3>
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.length > 0 ?{errors}: ""}
        {isSignIn ? (
          ""
        ) : (
          <Button onClick={handleSignIn}>Sign Up</Button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
