import { Box, Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'

const Summary = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 6,
        minHeight: '50vh'
      }}
    >
      <Box 
        width={'120%'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: theme.vars.dark,
        }}
        >
        <Typography
          sx={{
            fontSize: 'xl4',
            fontWeight: 700
          }}
        >
          99+
        </Typography>
        <Typography 
          sx={{
            fontSize: 'xl3',
            fontWeight: 500,
            mb: -1
          }}
        >
          Keinginan
        </Typography>
        <Typography 
          sx={{
            fontSize: 'xl3',
            fontWeight: 500
          }}
        >
          Tercapai
        </Typography>
      </Box>
      <Box>
        <Typography
          fontSize={'lg'}
        >
          Komitmen kami memberikan pelayanan yang terbaik untuk para pelanggan. Hingga saat ini lebih dari 99 keinginan pelanggan telah tercapai bersama kami. Dan masih akan bertambah lagi dan lagi. Rencanakan caramu untuk menggapai keinginanmu, melangkahlah mulai dari sekarang. celengin aja dulu!
        </Typography>
      </Box>
    </Box>
  )
}

export default Summary