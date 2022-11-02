import React, { useEffect } from 'react'
import { Button, IconButton, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { theme } from '../themes'
import { formatRp } from '../utils/formatRp';
import { BorderLinearProgress } from './BorderLinearProgress';
import { AddCircle } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getDateDiff } from '../utils/getDateDiff'
import Auth from '../utils/Auth';
import { getKeinginanDetail } from '../store/features/keinginan/keinginanSlice';
import { useParams } from 'react-router-dom';

const KeinginanDetailInfo = () => {
  const userId = Auth.getUserId()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.keinginan.currentDetail)
  const {id} = useParams()
  
  const {
    user_id, judul, 
    nominal, target, celengan, 
    celengan_per_hari, celengan_per_bulan, 
    prioritas, selesai, created_at
  } = detail
  
  const progress = Number((celengan / nominal * 100).toFixed(2))
  const {months} = getDateDiff(target)
  const remainingMonths = Math.floor(months)
  const remainingDays = Math.floor((months - remainingMonths) * 30)

  let {months: pastMonths} = getDateDiff(created_at)
  pastMonths = Math.abs(pastMonths)

  useEffect(() =>{
    userId && dispatch(getKeinginanDetail({userId, id}))
  }, [dispatch, userId, id])

  // console.log(detail);
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: 3
        }}
      >
        <Box>
          <Typography
            fontSize= {'xl3'}
          >
            {judul}
          </Typography>
          <Typography sx={{color: theme.vars.red, fontSize: 'lg'}}>
            {remainingMonths} bulan {remainingDays} hari lagi
          </Typography>
        </Box>
        <Box sx={{display: 'flex', gap: 2, alignItems: 'start'}}>
          <IconButton
            size={'sm'} 
            variant='plain'
            sx={{color: theme.vars.blue}}
          >
            <EditRoundedIcon />
          </IconButton>
          <IconButton 
            size={'sm'} 
            variant='plain'
            sx={{color: theme.vars.red, '&:hover': {backgroundColor: 'rgba(242, 66, 54, 0.3)'}}}
          >
            <DeleteRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: 3
        }}
      >
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
          <Typography sx={{fontSize: 'lg'}}>Sisa target</Typography>
          <Typography sx={{fontSize: 'lg'}}>Jangka bulan</Typography>
          <Typography sx={{fontSize: 'lg'}}>Celengan perbulan</Typography>
          <Typography sx={{fontSize: 'lg'}}>Celengan perhari</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 1}}>
          <Typography sx={{fontSize: 'lg'}}>{formatRp(nominal - celengan_per_hari)}</Typography>
          <Typography sx={{fontSize: 'lg'}}>{pastMonths}/{months} bulan</Typography>
          <Typography sx={{fontSize: 'lg'}}>{formatRp(celengan_per_bulan)}</Typography>
          <Typography sx={{fontSize: 'lg'}}>{formatRp(celengan_per_hari)}</Typography>
        </Box>
      </Box>
      
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, my: 2}}>
        <Typography>{progress}%</Typography>
        <Box sx={{minWidth: '60%', mx: 3}}>
          <BorderLinearProgress variant="determinate" value={progress}/>
        </Box>
        <Typography>{formatRp(nominal)}</Typography>
      </Box>
      
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3}}>
        <Button
          startDecorator={<AddCircle />}
          sx={{
            backgroundColor: theme.vars.dark,
            width: '120px',
            '&:hover':{
              backgroundColor: theme.vars.dark,
              opacity: 0.9
            }
          }}
        >
          celengin
        </Button>
      </Box>
    </Box>
  )
}

export default KeinginanDetailInfo