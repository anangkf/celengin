import { Box, Button, Typography } from '@mui/joy'
import React from 'react'
import BoxWrapper from './BoxWrapper'

const QuickAccess = () => {
  return (
    <BoxWrapper>
      <Typography
          fontSize= {'xl3'}
          sx={{
            fontWeight: 600
          }}
        >
          Akses cepat
          </Typography>
          {/* <Typography fontSize={'lg'}>Semangat menabung yaa</Typography> */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2
            }}
          >
          </Box>
    </BoxWrapper>
  )
}

export default QuickAccess