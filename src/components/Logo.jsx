import { Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'

const Logo = ({size}) => {
  return (
    <Typography
      fontSize="xl6"
      textColor={theme.vars.dark}
      sx={{
        mb: 1
      }}
    >
      celeng
      <Typography
        textColor={theme.vars.light}
      >
        in
      </Typography>
    </Typography>
  )
}

export default Logo