import { Card, Typography } from '@mui/joy'
import moment from 'moment/moment';
import React from 'react'
import { theme } from '../themes'
import { formatRp } from '../utils/formatRp';
import ModalEditKeinginan from './ModalEditKeinginan';

const QuickStarterItem = ( {data} ) => {
  const {nama, nominal, target_bulan} = data;
  const passedData = {...data, judul: data.judul, target: moment().add(target_bulan, 'M'), prioritas: 3}

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
      <ModalEditKeinginan data={passedData} template={true}/>
    </Card>
  )
}

export default QuickStarterItem