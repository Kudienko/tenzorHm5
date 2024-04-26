import React from "react";
import { TextField, Button, Typography } from "@mui/material";

function LoginPage(props) {
  const { register, errors } = props;
  return (
    <>
      <Typography variant="h2" fontFamily="Jacquard" textAlign="center">
        Авторизация
      </Typography>
      <Typography
        variant="body1"
        marginBottom={1}
        fontFamily="Jacquard"
        textAlign="center"
      >
        Введите ваш логин и пароль
      </Typography>
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш e-mail"
        helperText={errors.email ? errors.email.message : ""}
        {...register("email")}
      />
      <TextField
        error={!!errors.password}
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        helperText={errors.password ? errors.password.message : ""}
        {...register("password")}
      />
      <Button
        type="submit"
        sx={{
          fontFamily: "Jacquard",
          marginTop: 2,
          width: "60%",
          marginBottom: 2,
        }}
        variant="contained"
      >
        Войти
      </Button>
      <Typography variant="body1" sx={{ fontFamily: "Jacquard" }}>
        У вас нет аккаунта?<span className="incitingText">Регистрация</span>
      </Typography>
    </>
  );
}

export default LoginPage;
