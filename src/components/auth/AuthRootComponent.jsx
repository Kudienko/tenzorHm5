import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import "./style.scss";
import { Box } from "@mui/material";
import { instance, instanceRegister } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/thunks/loginThunk/loginThunk";
import { registerUser } from "../../store/thunks/registerThunk/registerThunk";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../utils/yup/yup";
import { registerSchema } from "../../utils/yup/yup"

function AuthRootComponent() {

  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userName, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: '',
    resolver: yupResolver(location.pathname === "/login" ? loginSchema : registerSchema)
  });


  console.log('errors', errors);
  const handleSubmitForm = async (data) => {
    console.log('datad',data);
    if (location.pathname === "/login") {
      try {
        const userData = {
          grant_type: "",
          username: data.email,
          password: data.password,
          scope: "",
          client_id: "",
          client_secret: "",
        };
        console.log(userData);
        dispatch(loginUser(userData)); // createAsincThunk
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (data.password === data.repeatPassword) {
        const userData = {
          login: data.username,
          email: data.email,
          hashed_password: data.password,
          city: "Moscow"
        };
        console.log("1231");
        console.log(userData);
        dispatch(registerUser(userData));
        navigate("/");
      } else {
        throw new Error("У вас не совпадают пароли");
      }
    }
  };

  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
        >
          {location.pathname === "/login" ? (
            <LoginPage register={register} errors={errors}/>
          ) : location.pathname === "/register" ? (
            <RegisterPage
              register={register} 
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
}

export default AuthRootComponent;
