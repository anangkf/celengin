import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/joy'
import { theme } from '../themes'
import { Link, useNavigate } from 'react-router-dom'
import APIUser from '../apis/user.api';
import Logo from '../components/Logo'
import Ilustration1 from '../assets/img/login1.png'
import Ilustration2 from '../assets/img/login2.png'
import SmallFooter from '../components/SmallFooter'
import { compare } from 'bcryptjs'
import Auth from '../utils/Auth';

const LOGIN_DATA = {
  username: '',
  password: '',
}

const Login = () => {
  const [loginData, setLoginData] = useState(LOGIN_DATA)
  const [isValid, setIsValid] = useState({
    username: true,
    password: true,
  })

  const navigate = useNavigate();
  
  const handleChange = (e) =>{
    const {name, value} = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    })

    setIsValid({
      username: true,
      password: true
    })
  }

  const handleLogin = () =>{
    APIUser.login(loginData.username)
      .then(res =>{
        const userData = res.data.results[0]
        compare(loginData.password, userData.password)
          .then(res => {
            if(res){
              Auth.storeUserInfoToCookie(res, userData);
              setLoginData(LOGIN_DATA);
              navigate('/dashboard');
            }else{
              setIsValid({
                ...isValid,
                password: false
              })
            }
          })
        })
        .catch(() => {
          setIsValid({
            ...isValid,
            username: false,
          })
        })
  }
  return (
    <Box
      sx={{
        backgroundColor: theme.vars.yellow, 
        width: '100vw', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    > 
      {/* illustration 1 */}
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(-80%, 15%)'
        }}
      >
        <img
          width={'80%'}
          src={Ilustration1}
          loading='lazy'
          alt=''
        />
      </Box>
      {/* illustration 2 */}
      <Box
        sx={{
          position: 'absolute',
          transform: 'translate(90%, 0)'
        }}
      >
        <img
          width={'85%'}
          src={Ilustration2}
          loading='lazy'
          alt=''
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '99',
          transform: 'translateY(-8%)'
        }}
        > 
        <Logo size={'xl6'}/>
        {/* login box */}
        <Box
          sx={{
            height: '68vh',
            width: '28vw',
            backgroundColor: theme.vars.light,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            px: 6,
            borderRadius: '24px',
          }}
        >
          <Typography
            fontSize= {'xl4'}
            sx={{
              mb: 2
            }}
          >
            masuk
          </Typography>
          
          <TextField 
            onChange = {(e) =>handleChange(e)}
            label="username" 
            name="username" 
            placeholder="your username…" 
            error={!isValid.username}
            helperText={!isValid.username ? `Username ${loginData.username} belum terdaftar` : ''}
            variant="outlined"
            autoFocus
            fullWidth 
          />
          <TextField 
            onChange = {(e) =>handleChange(e)}
            label="password" 
            name="password" 
            type='password'
            placeholder="your password…" 
            error={!isValid.password}
            helperText={!isValid.password ? 'Password tidak sesuai' : ''}
            variant="outlined"
            fullWidth 
          />

          <Button
            onClick={handleLogin}
            variant='solid'
            sx={{
              color: theme.vars.light,
              backgroundColor: theme.vars.dark,
              mt: 2,
              '&:hover': {
                backgroundColor: theme.vars.dark,
                opacity: [0.9],
              },
            }}
            fullWidth
          >
            Masuk
          </Button>

          <Typography>{`Belum punya akun? `}
            <Typography sx={{color: theme.vars.blue}}>
              <Link to='/register'>Daftar</Link>
            </Typography>
          </Typography>
        </Box>
      </Box>
      <SmallFooter />
    </Box>
  )
}

export default Login