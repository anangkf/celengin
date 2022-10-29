import { Box } from '@mui/joy'
import { Container } from '@mui/system'
import React from 'react'
import Overview from '../components/Overview'
import QuickAccess from '../components/QuickAccess'
import { theme } from '../themes'

const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: theme.vars.softGray
      }}
    >
      <Container
        sx={{
          pt: 7,
          minHeight: '100vh',
        }}
      >
        <Overview />
        <QuickAccess />
      </Container>
    </Box>
  )
}

export default Dashboard