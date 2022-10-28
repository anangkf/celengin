import { Box, Card, Typography } from '@mui/joy'
// import { Rating } from '@mui/material'
import React from 'react'
import { theme } from '../themes'

const Reviews = () => {

  const reviews = [
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
  ]

  return (
    <Box
      sx={{
        minHeight: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.vars.dark
      }}
    >
      <Typography
        sx={{
          fontSize: 'xl4',
          fontWeight: 700,
          mb: 2
        }}
      >
        What they says
      </Typography>
      <Box
        // scrollSnapType={'x-mandatory'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
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
        {reviews.map(({rating, user, comment}, idx) =>{
          return(
            <Card
              key={`${user}_${idx}`}
              sx={{
                minWidth: '360px',
                minHeight: '180px',
                display: 'flex',
                alignItems: 'center',
                scrollSnapAlign: 'center',
                backgroundColor: theme.vars.light,
                borderRadius: '24px',
                boxShadow: '0.5px 0.5px 12px 2px #dddddd'
              }}
            >
              {/* <Rating value={rating} readOnly /> */}
              <Typography
                sx={{
                  color: theme.vars.dark,
                  fontSize: 'xl',
                  fontWeight: 600
                }}
              >
                {user}
              </Typography>
              <Typography
                sx={{
                  color: theme.vars.dark,
                  fontSize: 'lg',
                  textAlign: 'center'
                }}
              >
                {comment}
              </Typography>
            </Card>
          )
        })}
      </Box>
    </Box>
  )
}

export default Reviews