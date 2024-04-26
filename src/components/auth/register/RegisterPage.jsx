import React from 'react'
import { TextField, Button, Typography } from '@mui/material'

function RegisterPage(props) {
  const { register, errors } = props
  return (
    <>
      <Typography variant="h2" fontFamily='Jacquard' textAlign='center'>Регистрация</Typography>
      <Typography variant="body1" marginBottom={1} fontFamily='Jacquard' textAlign='center'>Введите данные для регистрации</Typography>
      <TextField errors={!!errors.username} fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder="Введите ваш username" helperText={errors.username ? errors.username.message : ""} {...register("username")}/>
      <TextField errors={!!errors.email}  fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Введите ваш e-mail" helperText={errors.email ? errors.email.message : ""} {...register("email")}/>
      <TextField errors={!!errors.password}  type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Введите ваш пароль" helperText={errors.password ? errors.password.message : ""} {...register("password")}/>
      <TextField errors={!!errors.repeatPassword}  type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Повторите ваш пароль" helperText={errors.repeatPassword ? errors.repeatPassword.message : ""} {...register("repeatPassword")}/>
      <Button type='submit' sx={{ fontFamily: 'Jacquard', marginTop: 2, width: '60%', marginBottom: 2 }} variant="contained" >Регистрация</Button>
      <Typography variant="body1" sx={{ fontFamily: 'Jacquard', }}>У вас уже есть аккаунт?<span className="incitingText">Авторизация</span></Typography>
    </>
  )
}

export default RegisterPage