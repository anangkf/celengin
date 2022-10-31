import React from 'react'
import { Button, IconButton, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { theme } from '../themes'
import { formatRp } from '../utils/formatRp';
import { BorderLinearProgress } from './BorderLinearProgress';
import { AddCircle } from '@mui/icons-material';

const KeinginanDetailInfo = ({data}) => {
  const {id, judul, nominal, target, celengan_per_hari} = data;
  const progress = 5
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
            {data.judul}
          </Typography>
          <Typography sx={{color: theme.vars.red, fontSize: 'lg'}}>
            1 bulan 20 hari lagi
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
          <Typography sx={{fontSize: 'lg'}}>0.3/2 bulan</Typography>
          <Typography sx={{fontSize: 'lg'}}>{formatRp(80000)}</Typography>
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

export default KeinginanDetailInfo;