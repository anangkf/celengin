import { Box, IconButton, Typography } from '@mui/joy';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { theme } from '../themes';
import { formatRp } from '../utils/formatRp';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const KeinginanListItem = ({data, manipulate}) => {
  const {id, judul, nominal, target, celengan_per_hari} = data;

  const navigate = useNavigate()
  return (
    <Box
      onClick = {() => navigate(`/keinginan/${id}`)}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: theme.vars.softGray,
        borderRadius: '12px',
        height: '100px',
        cursor: 'pointer',
        my: 1,
        p: 2
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            mb: 1
          }}
        >
          {judul}
        </Typography>
        <Typography>{target} bulan</Typography>
      </Box>
      <Box sx={{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 2
        }}
      >
        <Box sx={{textAlign: 'end'}}>
          <Typography
            sx={{
              fontWeight: 600,
              mb: 1
            }}
          >
            {formatRp(nominal)}
          </Typography>
          <Typography sx={{color: theme.vars.green}}>{`${formatRp(celengan_per_hari)}/hari`}</Typography>
        </Box>
        {manipulate && 
          <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
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
        }
      </Box>
    </Box>
  )
}

export default KeinginanListItem