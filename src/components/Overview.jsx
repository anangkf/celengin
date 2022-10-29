import { Button, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React from 'react'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useNavigate } from 'react-router-dom'

const Overview = () => {
  const navigate = useNavigate()
  return (
    <BoxWrapper>
      {/* typography */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        }}
      >
        <Box>
        <Typography
          fontSize= {'xl3'}
          sx={{
            fontWeight: 600
          }}
        >
          Hi, Anang!
          </Typography>
          <Typography fontSize={'lg'}>Semangat menabung yaa</Typography>
        </Box>

        <Box sx={{textAlign: 'end'}}>
        <Typography
          fontSize= {'xl'}
          sx={{
            // fontWeight: 600
            color: theme.vars.green
          }}
        >
          + Rp. 300.000
          </Typography>
          <Typography fontSize={'lg'}>Celengan hari ini</Typography>
        </Box>
      </Box>
      {/* overview */}
      <Box
        sx={{
          color: theme.vars.light,
          display: 'flex',
          flexBasis: '32%',
          gap: 4,
          justifyContent: 'space-between',
          mt: 2
        }}
      >
        <Box
          sx={{
            minHeight: '160px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            borderRadius: '12px',
            backgroundColor: theme.vars.red,
            p: 2,
          }}
        >
          <Typography fontSize={'xl2'} sx={{color: 'inherit', fontWeight: 600}}>8 Keinginan</Typography>
          <Button 
            onClick={() => navigate('/keinginan')} 
            variant='plain' 
            startDecorator={<InfoRoundedIcon />} 
            sx={{
              color: 'inherit',
              '&:hover':{
                backgroundColor: 'transparent'
              },
              p: 0,

            }}
          >
            Lihat selengkapnya
          </Button>
        </Box>
        <Box
          sx={{
            minHeight: '160px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            borderRadius: '12px',
            backgroundColor: theme.vars.green,
            p: 2,
          }}
        >
          <Typography fontSize={'xl2'} sx={{color: 'inherit', fontWeight: 600}}>5 Tercapai</Typography>
          <Button 
            onClick={() => navigate('/keinginan')} 
            variant='plain' 
            startDecorator={<InfoRoundedIcon />} 
            sx={{
              color: 'inherit',
              '&:hover':{
                backgroundColor: 'transparent'
              },
              p: 0,

            }}
          >
            Lihat selengkapnya
          </Button>
        </Box>
        <Box
          sx={{
            minHeight: '160px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'start',
            borderRadius: '12px',
            backgroundColor: theme.vars.blue,
            p: 2,
          }}
        >
          <Typography fontSize={'xl2'} sx={{color: 'inherit', fontWeight: 600}}>3 Berjalan</Typography>
          <Button 
            onClick={() => navigate('/keinginan')} 
            variant='plain' 
            startDecorator={<InfoRoundedIcon />} 
            sx={{
              color: 'inherit',
              '&:hover':{
                backgroundColor: 'transparent'
              },
              p: 0,

            }}
          >
            Lihat selengkapnya
          </Button>
        </Box>
      </Box>
    </BoxWrapper>
  )
}

export default Overview