import { Box, Button, List, ListItem } from '@mui/joy'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { theme } from '../themes'
import Auth from '../utils/Auth'
import Logo from './Logo'
import authorized from '../mock/navbarAuthorized'
import notAuthorized from '../mock/navbarUnauthorized'
import { getInitialName } from '../utils/getInitialName'
import UserAvatar from './UserAvatar'


const Navbar = () => {
  const navigate = useNavigate()
  const authStatus = Auth.isAuthorized()
  const userDetails = Auth.getUserDetails()
  const initialName = userDetails && getInitialName(userDetails?.firstname, userDetails?.lastname)

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
        {authStatus ? 
          authorized.map((item, idx) =>{
              if(item.type === 'anchor'){
                return(
                  <ListItem
                    key={idx}
                    sx={{
                      color: theme.vars.dark,
                      transition: '1s',
                      fontSize: 'md',
                      '&:hover':{
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <Link color='inherit' style={{textDecoration: 'none'}} to={`${item.path}`}>{item.name}</Link>
                  </ListItem>
                )
              }
              return(
                <ListItem
                  onClick={()=> item.handler()}
                  key={idx}
                  sx={{
                    color: theme.vars.dark,
                    transition: '1s',
                    cursor: 'pointer',
                    fontSize: 'md',
                    '&:hover':{
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  {item.name}
                </ListItem>
              )
          })
          : notAuthorized.map(({name, path}, idx) =>{
            return(
              <ListItem
                key={idx}
                sx={{
                  color: theme.vars.dark,
                  transition: '1s',
                  fontSize: 'md',
                  '&:hover':{
                    transform: 'scale(1.1)'
                  }
                }}
              >
                <Link color='inherit' style={{textDecoration: 'none'}} to={`${path}`}>{name}</Link>
              </ListItem>
            )
          })
        }
      </List>
      {authStatus 
        ? <UserAvatar initial={initialName}/>
        : <Box
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
      }
    </Box>
  )
}

export default Navbar
