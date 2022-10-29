import { Button, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'
import KeinginanList from './KeinginanList'

const KeinginanTerbaru = () => {
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
      <KeinginanList />
    </BoxWrapper>
  )
}

export default KeinginanTerbaru