import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post("http://localhost:4000/login", values)
      .then((res) => {
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("username", res.data.username);
      //   props.logFunction();
      //   navigate("/Header");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const validate = (values) => {
    console.log("validation");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return <div>
<h2>login Page</h2>
<form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Password"
        />
        <button type='submit' disabled ={!formik.isValid}>Submit</button>
      </form>
    </div>
  
}

export default Login;
