import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/joy'
import { theme } from '../themes'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Ilustration1 from '../assets/img/login1.png'
import Ilustration2 from '../assets/img/login2.png'
import SmallFooter from '../components/SmallFooter'


const Login = () => {
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
            label="username" 
            placeholder="your username…" 
            variant="outlined"
            fullWidth 
          />
          <TextField 
            label="password" 
            type='password'
            placeholder="your password…" 
            variant="outlined"
            fullWidth 
          />

          <Button
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

          <Typography>Belum punya akun?
            <Typography>
              <Link to='/register' color={theme.vars.blue}>Daftar</Link>
            </Typography>
          </Typography>
        </Box>
      </Box>
      <SmallFooter />
    </Box>
  )
}

export default Login