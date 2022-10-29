import { Box } from '@mui/joy'
import React from 'react'

const HorizontalScroller = ({children}) => {
  return (
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%',
          height: '300px',
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          overflowX: 'auto',
          gap: 4,
          // hide-scrollbar
          '&::-webkit-scrollbar':{
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {children}
    </Box>
  )
}

export default HorizontalScroller