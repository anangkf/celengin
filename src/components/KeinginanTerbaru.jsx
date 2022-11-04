import { Button, Typography } from '@mui/joy'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'
import KeinginanList from './KeinginanList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKeinginanTerbaru } from '../store/features/keinginan/keinginanSlice'

const KeinginanTerbaru = ({userData}) => {
  const {userId: userID } = userData
  const dispatch = useDispatch()
  const terbaru = useSelector(state => state.keinginan.terbaru)
  
  useEffect(() => {
    dispatch(fetchKeinginanTerbaru(userID))
  }, [dispatch, userID])
  
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
      {terbaru.length === 0
        ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4}}>
            <Typography sx={{fontSize: 'lg'}}>
              Belum ada keinginan yang dibuat. <Typography sx={{color: theme.vars.blue, cursor: 'pointer'}}>Buat sekarang</Typography>
            </Typography>
          </Box>
        : <KeinginanList data={terbaru} manipulate={false}/>
      }
    </BoxWrapper>
  )
}

export default KeinginanTerbaru