import { Box, Chip, IconButton, Typography } from '@mui/joy';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { theme } from '../themes';
import { formatRp } from '../utils/formatRp';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../utils/formatDate';
import { handleDeleteKeinginan } from '../utils/handleDeleteKeinginan';
import ModalEditKeinginan from './ModalEditKeinginan';

const KeinginanListItem = ({data, manipulate}) => {
  const {id, judul, nominal, target, celengan_per_hari, prioritas, selesai} = data;
  const loading = useSelector(state => state.keinginan.loading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (e) =>{
    const name = e.target.localName

    if(
      !(name === 'button' || 
        name === 'path' || 
        name === 'svg' || 
        name === 'input' || 
        name === 'li' || 
        name === 'h2' ||
        name === 'label' ||
        name === 'span' ||
        e.target.parentElement.localName === 'form' ||
        e.target.className.includes('Modal')
        )
      ){
      navigate(`/keinginan/${id}`) 
    }
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
          <Box sx={{display: 'flex', gap: 2, alignItems: 'baseline',}}>
            <Typography
              sx={{
                fontWeight: 600,
                mb: 1
              }}
            >
              {loading ? <Skeleton width={'180px'} /> : judul}
            </Typography>
            {!loading && <Chip 
              variant={'soft'}
              color={selesai ? 'success' : 'warning'}
            >
              {selesai ? 'Selesai' : 'Berjalan'}
            </Chip>}
            {!loading && <Chip 
              variant={'soft'}
              color={prioritas === 1 ? 'danger' : prioritas === 2 ? 'primary' : 'neutral' }
            >
              Priority {prioritas === 1 ? 'High' : prioritas === 2 ? 'Medium' : 'Low' }
            </Chip>}
          </Box>
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
                : <ModalEditKeinginan data={data}/>
              }
              {loading
                ? <Skeleton variant="rectangular" width={28} height={28}/>
                : <IconButton 
                    size={'sm'} 
                    variant='plain'
                    onClick={() => handleDeleteKeinginan(id, data, dispatch)}
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