import { Box } from '@mui/system'
import React from 'react'
import { theme } from '../themes'

const BoxWrapper = ({children}) => {
  return (
    <Box
      sx={{
        minHeight: '200px',
        backgroundColor: theme.vars.light,
        color: theme.vars.dark,
        borderRadius: '24px',
        my: 1,
        p: 3
      }}
    >
      {children}
    </Box>
  )
}

export default BoxWrapper