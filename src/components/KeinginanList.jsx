import { Box } from '@mui/material'
import React from 'react'
import KeinginanListItem from './KeinginanListItem'

const KeinginanList = ({data, manipulate}) => {
  
  return (
    <Box
      sx={{

      }}
    >
      {data?.map(item =>{
        return(
          <KeinginanListItem key={item.id} data={item} manipulate={manipulate} />
        )
      })}
    </Box>
  )
}

export default KeinginanList