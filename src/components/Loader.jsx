import { Box } from '@mui/system'
import React from 'react'
import '../styles/loader.css'

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1, 22, 39, .2)',
        top: 0
      }}
    >
      <div className="dots"></div>
    </Box>
  )
}

export default Loader