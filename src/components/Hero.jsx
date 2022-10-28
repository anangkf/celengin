import React from 'react'
import { Box } from '@mui/system'
import HeroIllustration from '../assets/img/landing-hero.png'
import { Button, Typography } from '@mui/joy'
import { theme } from '../themes'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <Box
      minHeight={'100vh'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
        <Box
          maxWidth={'550px'}
          sx={{
            py: 11,
            px: 3
          }}
        >
          <Typography
            fontSize={'xl6'}
            sx={{
              color: theme.vars.dark,
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Gapai impianmu <br />
            lebih mudah <br />
            celengin aja dulu!
          </Typography>
          <Typography
            fontSize={'xl2'}
            sx={{
              color: theme.vars.secondary
            }}
          >
            Set targetmu agar menabung menjadi mudah dan menyenangkan.
          </Typography>
          <Button
            onClick={() => navigate('/login')}
            sx={{
              backgroundColor: theme.vars.dark,
              color: theme.vars.light,
              my: 2,
              '&:hover': {
                backgroundColor: theme.vars.dark,
                opacity: 0.8
              }
            }}
          >
            Mulai sekarang!
          </Button>
        </Box> 
        <Box
          sx={{
            objectFit: 'cover'
          }}
        >
          <img
            width={'85%'}
            src={HeroIllustration}
            loading='lazy'
            alt='hero'
          />
        </Box>
    </Box>
  )
}

export default Hero