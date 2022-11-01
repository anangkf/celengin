import { Button, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKeinginanList } from '../store/features/keinginan/keinginanSlice'

const Overview = ({userData}) => {
  const {userId, firstname, lastname, username} = userData
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const keinginanList = useSelector(state => state.keinginan.data)
  const selesai = useSelector(state => state.keinginan.selesai)

  useEffect(() => {
    dispatch(fetchKeinginanList(userId))
  }, [dispatch])
  
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
          {`Hi, ${firstname}!`}
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
          <Typography fontSize={'xl2'} sx={{color: 'inherit', fontWeight: 600}}>{keinginanList.length} Keinginan</Typography>
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
          <Typography fontSize={'xl2'} sx={{color: 'inherit', fontWeight: 600}}>{selesai.length} Tercapai</Typography>
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
          <Typography fontSize={'xl2'} sx={{color: 'inherit', fontWeight: 600}}>{keinginanList.length - selesai.length} Berjalan</Typography>
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