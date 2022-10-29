import { Box } from '@mui/material'
import React from 'react'
import KeinginanListItem from './KeinginanListItem'

const KeinginanList = () => {
  const keinginanTerbaruList = [
    {
      id: 1,
      judul: 'Beli motor',
      nominal: 1000000,
      target: 2,
      celengan_per_hari: 20000
    },
    {
      id: 2,
      judul: 'Beli iPad',
      nominal: 1000000,
      target: 1,
      celengan_per_hari: 20000
    },
    {
      id: 3,
      judul: 'Beli PC',
      nominal: 2000000,
      target: 3,
      celengan_per_hari: 20000
    },
    {
      id: 4,
      judul: 'Naik haji',
      nominal: 1000000,
      target: 12,
      celengan_per_hari: 20000
    },
    {
      id: 5,
      judul: 'Tunangan',
      nominal: 5000000,
      target: 4,
      celengan_per_hari: 20000
    },
  ]
  return (
    <Box
      sx={{

      }}
    >
      {keinginanTerbaruList.map(item =>{
        return(
          <KeinginanListItem data={item} manipulate={false} />
        )
      })}
    </Box>
  )
}

export default KeinginanList