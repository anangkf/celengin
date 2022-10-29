import { Typography } from '@mui/joy'
import { Box, Container } from '@mui/system'
import React from 'react'
import BoxWrapper from '../components/BoxWrapper'
import { theme } from '../themes'
import KeinginanDetailInfo from '../components/KeinginanDetailInfo';

const KeinginanDetail = () => {
  const data = {
    id: 1,
    judul: 'Beli motor',
    nominal: 1000000,
    target: 2,
    celengan_per_hari: 20000
  }
  return (
    <Box
      sx={{
        backgroundColor: theme.vars.softGray
      }}
    >
      <Container
        maxWidth='md'
        sx={{
          pt: 7,
          pb: 2,
          minHeight: '100vh',
        }}
      >
        <BoxWrapper>
          <Typography
            fontSize= {'xl3'}
            sx={{
              fontWeight: 600
            }}
          >
            Detail Keinginan
          </Typography>
          
          <KeinginanDetailInfo data={data}/>
        </BoxWrapper>
      </Container>
    </Box>
  )
}

export default KeinginanDetail