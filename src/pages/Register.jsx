import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/joy'
import { theme } from '../themes'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Ilustration from '../assets/img/register.png'
import SmallFooter from '../components/SmallFooter'

const Register = () => {
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
              label="firstname" 
              placeholder="your firstname…" 
              variant="outlined"
              sx={{
                maxWidth: '48%'
              }}
            />
            <TextField 
              label="lastname" 
              placeholder="your lastname…" 
              variant="outlined"
              sx={{
                maxWidth: '48%'
              }}
            />
          </Box>
          <TextField 
            label="username" 
            placeholder="your username…" 
            variant="outlined"
            fullWidth 
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <TextField 
              label="password" 
              placeholder="enter password…" 
              type='password'
              variant="outlined"
              sx={{
                maxWidth: '48%'
              }}
            />
            <TextField 
              label="confirm password" 
              placeholder="re-enter password…" 
              type='password'
              variant="outlined"
              sx={{
                maxWidth: '48%'
              }}
            />
          </Box>

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
            Daftar
          </Button>

          <Typography>Sudah punya akun?
            <Typography>
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
