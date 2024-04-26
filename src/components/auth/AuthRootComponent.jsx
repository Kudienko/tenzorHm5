import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import "./style.scss";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/thunks/loginThunk/loginThunk";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../utils/yup/yup";

function AuthRootComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: '',
    resolver: yupResolver(loginSchema)
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
        await dispatch(loginUser(userData)); // createAsincThunk
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
      if (password === repeatPassword) {
        const userData = {
          firstName,
          userName,
          email,
          password,
          repeatPassword,
        };
        const newUser = await instance.post("auth/register", userData);
        console.log(newUser.data);
      } else {
        throw new Error("У вас не совпадают пароли");
      }
    }
  };

  const location = useLocation();

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
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUsername={setUsername}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
}

export default AuthRootComponent;
