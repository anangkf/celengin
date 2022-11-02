import { Box } from '@mui/joy'
import { Container } from '@mui/system'
import React from 'react'
import KeinginanTerbaru from '../components/KeinginanTerbaru'
import Overview from '../components/Overview'
import QuickAccess from '../components/QuickAccess'
import QuickStarter from '../components/QuickStarter'
import { theme } from '../themes'
import Auth from '../utils/Auth'

const Dashboard = () => {
  const userId = Auth.getUserId()
  const details = Auth.getUserDetails()
  const userData = {userId, ...details}
  return (
    <Box
      sx={{
        backgroundColor: theme.vars.softGray
      }}
    >
      <Container
        sx={{
          pt: 7,
          pb: 2,
          minHeight: '100vh',
        }}
      >
        <Overview userData = {userData} />
        <QuickAccess />
        <QuickStarter />
        <KeinginanTerbaru userData = {userData} />
      </Container>
    </Box>
  )
}

export default Dashboard