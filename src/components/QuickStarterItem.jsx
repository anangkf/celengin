import { Button, Card, Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'

const QuickStarterItem = ( {data} ) => {
  const {id, nama, nominal, target} = data;

  return (
    <Card 
      key={id}
      variant={'solid'}
      sx={{
        backgroundColor: theme.vars.yellow,
        color: theme.vars.dark,
        minHeight: '140px',
        minWidth: '260px',
        display: 'flex',
        scrollSnapAlign: 'start',
        boxShadow: theme.vars.smoothShadow,
      }}
    >
      <Typography fontWeight={600} sx={{mb: 1}}>
        {nama}
      </Typography>
      <Typography>
        {`Rp. ${new Intl.NumberFormat('ID').format(
          nominal
        )}`}
      </Typography>
      <Typography>
        {`${target} bulan`}
      </Typography>
      <Button
          // startDecorator={<AddCircle />}
          sx={{
            backgroundColor: theme.vars.dark,
            width: '100px',
            alignSelf: 'end',
            mt: 1,
            '&:hover':{
              backgroundColor: theme.vars.dark,
              opacity: 0.9
            }
          }}
        >
          Pick
        </Button>
    </Card>
  )
}

export default QuickStarterItem