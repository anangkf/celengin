import { Box, Button, Typography } from '@mui/joy';
import React from 'react'
import { theme } from '../themes';
import BoxWrapper from './BoxWrapper';
import HorizontalScroller from './HorizontalScroller'
import ModalAddKeinginan from './ModalAddKeinginan'
import QuickStarterItem from './QuickStarterItem';

const QuickStarter = () => {
  const quickStarter = [
    {
      id: 1,
      nama: 'Template 1',
      nominal: 1000000,
      target: 2
    },
    {
      id: 2,
      nama: 'Template 2',
      nominal: 1000000,
      target: 1
    },
    {
      id: 3,
      nama: 'Template 3',
      nominal: 2000000,
      target: 2
    },
    {
      id: 4,
      nama: 'Template 4',
      nominal: 1000000,
      target: 3
    },
    {
      id: 5,
      nama: 'Template 5',
      nominal: 5000000,
      target: 6
    },
    {
      id: 6,
      nama: 'Template 6',
      nominal: 5000000,
      target: 9
    },
    {
      id: 7,
      nama: 'Template 7',
      nominal: 10000000,
      target: 12
    },
  ]

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
        <ModalAddKeinginan />
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
          {quickStarter.map(item =>{
            return(
              <QuickStarterItem key={item.id} data={item}/>
            )
          })}
      </HorizontalScroller>
    </BoxWrapper>
  )
}

export default QuickStarter