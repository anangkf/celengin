import { Box, Button, Card, Typography } from '@mui/joy';
import { Skeleton } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplate } from '../store/features/templates/templateSlice';

import { theme } from '../themes';
import BoxWrapper from './BoxWrapper';
import HorizontalScroller from './HorizontalScroller'
import ModalAddKeinginan from './ModalAddKeinginan'
import QuickStarterItem from './QuickStarterItem';

const QuickStarter = () => {
  const dispatch = useDispatch()
  const templates = useSelector(state => state.template.data)
  const loading = useSelector(state => state.template.loading)

  useEffect(() => {
    dispatch(fetchTemplate())
  }, [dispatch])

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
          Quick starter
        </Typography>
        <ModalAddKeinginan text={'Buat sendiri'}/>
        {/* <Button
          sx={{
            backgroundColor: theme.vars.dark,
            width: '120px',
            '&:hover':{
              backgroundColor: theme.vars.dark,
              opacity: 0.9
            },
            py: 1
          }}
        >
          Buat sendiri
        </Button> */}
      </Box>
      <HorizontalScroller>
          {!loading
            ? templates.map(item =>{
              return(
                <QuickStarterItem key={item.id} data={item}/>
              )
            })
            : [1,2,3,4,5,6,7].map(val =>{
              return(
                <Card
                  key={val}
                  variant={'solid'}
                  sx={{
                    backgroundColor: theme.vars.softGray,
                    minHeight: '140px',
                    minWidth: '260px',
                    display: 'flex',
                    scrollSnapAlign: 'start',
                  }}
                >
                  <Skeleton animation="wave" width={160}/>
                  <Skeleton animation="wave" width={120}/>
                  <Skeleton 
                    animation="wave" 
                    variant={'rectangular'}
                    sx={{
                      borderRadius: 2,
                      width: 100,
                      height: 36,
                      alignSelf: 'end',
                      mt: 2
                    }}
                  />
                </Card>
              )
            })
          }
      </HorizontalScroller>
    </BoxWrapper>
  )
}

export default QuickStarter