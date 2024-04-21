import React from 'react'
import { TextField, Button, Typography } from '@mui/material'

function RegisterPage() {
  return (
    <>
      <Typography variant="h2" fontFamily='Jacquard' textAlign='center'>Регистрация</Typography>
      <Typography variant="body1" marginBottom={1} fontFamily='Jacquard' textAlign='center'>Введите данные для регистрации</Typography>
      <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder="Введите ваше имя" />
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder="Введите ваш username" />
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder="Введите ваш e-mail" />
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Введите ваш пароль" />
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder="Повторите ваш пароль" />
      <Button sx={{ fontFamily: 'Jacquard', marginTop: 2, width: '60%', marginBottom: 2 }} variant="contained" >Регистрация</Button>
      <Typography variant="body1" sx={{ fontFamily: 'Jacquard', }}>У вас уже есть аккаунт?<span className="incitingText">Авторизация</span></Typography>
    </>
  )
}

export default RegisterPage