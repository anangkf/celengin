import { Box, Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'

const SmallFooter = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        height: '45px',
        width: '100%',
        backgroundColor: theme.vars.dark,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography 
        sx={{
          color: theme.vars.light
        }}
      >
        copyright 2022 celengin. Anang Khoirul Fadli
      </Typography>
    </Box>
  )
}

export default SmallFooter