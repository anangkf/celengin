import React from 'react'
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/joy'
import { theme } from '../themes'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import APIUser from '../apis/user.api';
import {bcrypter} from '../utils/bcrypter'
import Ilustration from '../assets/img/register.png'
import SmallFooter from '../components/SmallFooter'
import { useState } from 'react'

const USER_DATA = {
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const Register = () => {
  const [userData, setUserData] = useState(USER_DATA)
  const [isValid, setIsValid] = useState(true)

  const navigate = useNavigate()
  
  const handleChange = (e) =>{
    const {name, value} = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }
  
  const handleRegister = () =>{
    if(userData.firstname && userData.lastname && userData.username && userData.password !== ''){
      if(userData.password === userData.confirmPassword){
        const data = {...userData, password: bcrypter(userData.password)};
        delete data.confirmPassword;
        
        APIUser.register(data);
        setUserData(USER_DATA);
        setTimeout(() => navigate('/login'), 750)
      }else{
        setIsValid(false)
        setTimeout(() => setIsValid(true), 1000)
      }
    }else{alert('Semua field harus diisi!')}
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.vars.yellow, 
        width: '100vw', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    > 
      {/* illustration 1 */}
      <Box
        sx={{
          transform: 'translateX(25%)'
        }}
      >
        <img
          width={'80%'}
          src={Ilustration}
          loading='lazy'
          alt=''
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: 'translateY(-8%)'
        }}
        > 
        <Logo size={'xl6'}/>
        {/* register box */}
        <Box
          sx={{
            height: '72vh',
            width: '36vw',
            backgroundColor: theme.vars.light,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            px: 4,
            borderRadius: '24px',
          }}
        >
          <Typography
            fontSize= {'xl4'}
            sx={{
              mb: 1
            }}
          >
            daftar
          </Typography>
          {/* name field */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <TextField 
              onChange={handleChange}
              label="firstname" 
              name="firstname" 
              value={userData.firstname}
              placeholder="your firstname…" 
              variant="outlined"
              required
              sx={{
                maxWidth: '48%'
              }}
            />
            <TextField 
              onChange={handleChange}
              label="lastname" 
              name="lastname"
              value={userData.lastname} 
              placeholder="your lastname…" 
              variant="outlined"
              required
              sx={{
                maxWidth: '48%'
              }}
            />
          </Box>
          <TextField 
            onChange={handleChange}
            label="username" 
            name="username" 
            value={userData.username}
            placeholder="your username…" 
            variant="outlined"
            required
            fullWidth 
          />
          <Box sx={{width: '100%',}}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <TextField
                onChange={handleChange}
                label="password" 
                name="password" 
                value={userData.password}
                placeholder="enter password…" 
                type='password'
                variant="outlined"
                required
                sx={{
                  maxWidth: '48%'
                }}
              />
              
              <TextField 
                onChange={handleChange}
                label="confirm password" 
                name="confirmPassword" 
                value={userData.confirmPassword}
                placeholder="re-enter password…" 
                type='password'
                variant="outlined"
                required
                sx={{
                  maxWidth: '48%'
                }}
              />
            </Box>
            {!isValid && <FormHelperText sx={{color: theme.vars.red,}}>Password tidak cocok!</FormHelperText>}
          </Box>

          <Button
            onClick={() => handleRegister()}
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
            Daftar
          </Button>

          <Typography>{`Sudah punya akun? `}
            <Typography sx={{color: theme.vars.blue}}>
              <Link to='/login' color={theme.vars.blue}>Login</Link>
            </Typography>
          </Typography>
        </Box>
      </Box>
      <SmallFooter />
    </Box>
  )
}

export default Register
