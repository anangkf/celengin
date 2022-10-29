import { Box, IconButton, Typography } from '@mui/joy';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { theme } from '../themes';
import { formatRp } from '../utils/formatRp';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Skeleton } from '@mui/material';

const KeinginanListItem = ({data, manipulate}) => {
  const {id, judul, nominal, target, celengan_per_hari} = data;

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const navigate = useNavigate()
  return (
    !loading 
      ? <Box
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
      : <Box
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
            {loading ? <Skeleton width={'180px'} /> : 'Beli judul'}
          </Typography>
          <Typography>{loading ? <Skeleton width={'120px'} /> : '1 bulan'}</Typography>
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
              {loading ? <Skeleton width={'120px'} /> : 'Rp. 1.000.000'}
            </Typography>
            <Typography sx={{color: theme.vars.green}}>{loading ? <Skeleton width={'140px'} /> : 'Rp. 12.000/hari'}</Typography>
          </Box>
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
        </Box>
      </Box>
  )
}

export default KeinginanListItem