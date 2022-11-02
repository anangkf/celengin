import { Button, Card, Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'
import { formatRp } from '../utils/formatRp';

const QuickStarterItem = ( {data} ) => {
  const {id, nama, nominal, target_bulan} = data;
  
  return (
    <Card 
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
        {formatRp(nominal)}
      </Typography>
      <Typography>
        {`${target_bulan} bulan`}
      </Typography>
      <Button
          // startDecorator={<AddCircle />}
          id={id}
          onClick={(e) => console.log(e.target.id)}
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