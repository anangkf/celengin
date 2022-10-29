import { Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NotFoundImg from '../assets/img/404.png'
import Navbar from '../components/Navbar'
import { theme } from '../themes'

const NotFound = () => {
  const navigate = useNavigate()

  setTimeout(() => navigate('/'), 1500)
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundColor: theme.vars.light,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={NotFoundImg}
          alt='not-found'
          loading='lazy'
        />
        <Typography
          sx={{
            color: theme.vars.dark,
            fontSize: 'xl',
            fontWeight: 600,
            pt: 2
          }}
        >
          Upss.. kayaknya yang kamu cari ngga ada nih
        </Typography>
      </Box>
    </Box>
  )
}

export default NotFound