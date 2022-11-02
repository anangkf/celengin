import { Box, IconButton, Typography } from '@mui/joy';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { theme } from '../themes';
import { formatRp } from '../utils/formatRp';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { formatDate } from '../utils/formatDate';

const KeinginanListItem = ({data, manipulate}) => {
  const {id, judul, nominal, target, celengan_per_hari, created_at} = data;
  const loading = useSelector(state => state.keinginan.loading)
  const navigate = useNavigate()
  
  const handleClick = () =>{
    navigate(`/keinginan/${id}`) 
  }

  return (
      <Box
        onClick = {handleClick}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: theme.vars.light,
          border: `2px solid ${theme.vars.softGray}`,
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
            {loading ? <Skeleton width={'180px'} /> : judul}
          </Typography>
          <Typography>{loading ? <Skeleton width={'120px'} /> : formatDate(target)}</Typography>
        </Box>
        <Box sx={{
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 2
          }}
        >
          <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'end'}}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: 1
              }}
            >
              {loading ? <Skeleton width={'120px'} /> : formatRp(nominal)}
            </Typography>
            <Typography sx={{color: theme.vars.green}}>{loading ? <Skeleton width={'140px'} /> : formatRp(celengan_per_hari)}</Typography>
          </Box>
          {manipulate &&
            <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
              {loading
                ? <Skeleton variant="rectangular" width={28} height={28}/>
                : <IconButton 
                    size={'sm'} 
                    variant='plain'
                    sx={{color: theme.vars.blue}}
                  >
                    <EditRoundedIcon />
                  </IconButton>
              }
              {loading
                ? <Skeleton variant="rectangular" width={28} height={28}/>
                : <IconButton 
                    size={'sm'} 
                    variant='plain'
                    sx={{color: theme.vars.red, '&:hover': {backgroundColor: 'rgba(242, 66, 54, 0.3)'}}}
                  >
                    <DeleteRoundedIcon />
                  </IconButton>
              }
            </Box>
          }
        </Box>
      </Box>
  )
}

export default KeinginanListItem