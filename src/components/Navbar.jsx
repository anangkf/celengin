import { Box, Button, List, ListItem } from '@mui/joy'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { theme } from '../themes'
import Logo from './Logo'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        backgroundColor: theme.vars.yellow,
        color: theme.vars.dark,
        position: 'fixed',
        top: 0,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        px: 2,
        boxShadow: theme.vars.shadow,
        zIndex: 99
      }}
    >
      <Box onClick={() =>navigate('/')} sx={{cursor: 'pointer'}}>
        <Logo size={'xl3'}/>
      </Box>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          px: 12,
        }}
      >
        <ListItem
          sx={{
            color: theme.vars.dark,
            typography: 'body1',
            // '&:hover':{
            //   backgroundColor: theme.vars.dark,
            //   color: theme.vars.dark
            // }
          }}
        >
          <Link color='inherit' style={{textDecoration: 'none'}} to={'/login'}>Get started</Link>
        </ListItem>
        <ListItem
          sx={{
            color: theme.vars.dark,
            typography: 'body1',
          }}
        >
          <Link color='inherit' style={{textDecoration: 'none'}} to={'/login'}>Features</Link>
        </ListItem>
        <ListItem
          sx={{
            color: theme.vars.dark,
            typography: 'body1',
          }}
        >
          <Link color='inherit' style={{textDecoration: 'none'}} to={'/login'}>About</Link>
        </ListItem>
        <ListItem
          sx={{
            color: theme.vars.dark,
            typography: 'body1',
          }}
        >
          <Link color='inherit' style={{textDecoration: 'none'}} to={'/login'}>Contact</Link>
        </ListItem>
      </List>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 190
        }}
      >
        <Button
          onClick={() => navigate('/login')}
          variant='plain'
          sx={{
            color: theme.vars.dark,
            borderColor: theme.vars.dark,
            px: 3,
            '&:hover': {
              backgroundColor: theme.vars.dark,
              borderColor: theme.vars.dark,
              color: theme.vars.light
            }
          }}
        >
          Masuk
        </Button>
        <Button
          onClick={() => navigate('/register')}
          variant='solid'
          sx={{
            color: theme.vars.light,
            backgroundColor: theme.vars.dark,
            px: 3,
            '&:hover': {
              backgroundColor: theme.vars.dark,
              opacity: [0.85]
            }
          }}
        >
          Daftar
        </Button>
      </Box>
    </Box>
  )
}

export default Navbar
