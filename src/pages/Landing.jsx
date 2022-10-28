import { Box, Container } from '@mui/joy'
import React from 'react'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import { theme } from '../themes'

const Landing = () => {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        display: 'block',
        backgroundColor: theme.vars.light,
        p: 1
      }}
    >
      <Container
        sx={{
          // minHeight: '100vh',
        }}
      >
        <Hero />
        <Summary />
      </Container>
    </Box>
  )
}

export default Landing
