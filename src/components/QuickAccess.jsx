import { AddCircle, KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Input, Option, Select, selectClasses, Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'

const QuickAccess = () => {
  const celenganList = ['Beli motor', 'Buat nikah', 'Beli PC', 'Naik haji']
  return (
    <BoxWrapper>
      <Typography
        fontSize= {'xl3'}
        sx={{
          fontWeight: 600
        }}
      >
        Akses cepat
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            my: 2
          }}
        >
          <Select
            placeholder="Pilih celengan…"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: '48%',
              [`& .${selectClasses.indicator}`]: {
                transition: '0.2s',
                [`&.${selectClasses.expanded}`]: {
                  transform: 'rotate(-180deg)',
                },
              },
            }}
          >
            {celenganList.map((item, idx) =>{
              return(
                <Option key={idx} value={item}>{item}</Option>
              )
            })}
          </Select>
          <Input type='number' sx={{width: '48%'}} placeholder="Masukkan nominal…" />
        </Box>
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
    </BoxWrapper>
  )
}

export default QuickAccess