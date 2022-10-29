import { Button, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'
import KeinginanList from './KeinginanList'

const KeinginanTerbaru = () => {
  const keinginanTerbaruList = [
    {
      id: 1,
      judul: 'Beli motor',
      nominal: 1000000,
      target: 2,
      celengan_per_hari: 20000
    },
    {
      id: 2,
      judul: 'Beli iPad',
      nominal: 1000000,
      target: 1,
      celengan_per_hari: 20000
    },
    {
      id: 3,
      judul: 'Beli PC',
      nominal: 2000000,
      target: 3,
      celengan_per_hari: 20000
    },
    {
      id: 4,
      judul: 'Naik haji',
      nominal: 1000000,
      target: 12,
      celengan_per_hari: 20000
    },
    {
      id: 5,
      judul: 'Tunangan',
      nominal: 5000000,
      target: 4,
      celengan_per_hari: 20000
    },
  ]
  return (
    <BoxWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography
          fontSize= {'xl3'}
          sx={{
            fontWeight: 600
          }}
        >
          Keinginan Terbaru
        </Typography>
        <Button
          variant='plain'
          sx={{
            color: theme.vars.dark,
            width: '120px',
            fontSize: 'md',
            transition: '.75s',
            '&:hover':{
              backgroundColor: 'transparent',
              transform: 'scale(1.075)',
            },
            py: 1
          }}
        >
          <Link to='/keinginan'>Lihat semua</Link>
        </Button>
      </Box>
      <KeinginanList data={keinginanTerbaruList} manipulate={false}/>
    </BoxWrapper>
  )
}

export default KeinginanTerbaru