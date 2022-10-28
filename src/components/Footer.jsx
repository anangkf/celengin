import { Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React from 'react'
import { theme } from '../themes'
import Logo from './Logo'
import SmallFooter from './SmallFooter'

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        background: theme.vars.secondary,
        pb: '48px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          p: 2,
        }}
      >
        <Box
          maxWidth={'270px'}
        >
          <Logo size={'xl3'} />
          <Typography
            textColor={theme.vars.light}
          >
            Kami mendedikasikan diri untuk membantu Anda menggapai semua keinginan. Rencanakan mulai dari sekarang bersama celengin.
          </Typography>
        </Box>  
        <Box
          sx={{
            maxWidth: '350px',
            textAlign: 'right',
          }}
        >
          <Typography
            level='h6'
            sx={{
              color: theme.vars.light,
              mb: 2
            }}
            >
            Purwokerto, Indonesia
          </Typography>
          <Typography
            textColor={theme.vars.light}
          >
            Jl. Jend. Gatot Subroto No.98, Brubahan, <br/>
            Purwanegara, Kec. Purwokerto Tim., <br />
            Kabupaten Banyumas, Jawa Tengah 53116
          </Typography>
        </Box>  
      </Box>
      <SmallFooter />
    </Box>
  )
}

export default Footer
