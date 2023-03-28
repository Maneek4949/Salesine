import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [isSign, setisSign] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios
        .post("http://localhost:5000/auth/login", {
          name: name,
          password: password,
        })
        .catch((err) => {
          setErrors(err.response.data.Message);
          console.log(err);
        });
      console.log(res);
      dispatch(loginSuccess());
      setisSign(true);
      navigate('/');
    } catch (err) {
      dispatch(loginFailure());
      console.log(err);
    }
  };

  const handleLogout = (e)=>{
    setisSign(false);
  }

  return (
    <div className="acc">
      <div className="accCard">
        <h3>Login</h3>
        <input
        type="text"
          placeholder="UserName"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.length > 0 ?{errors}: ""}
        {isSign?<Button onClick={handleLogout}>Logout</Button>:<Button onClick={handleLogin}>Login</Button>}
        </div>
      </div>
  );
};

export default SignIn;
