import { Box, Card, Typography } from '@mui/joy'
import { Rating } from '@mui/material'
import React from 'react'
import { theme } from '../themes'
import HorizontalScroller from './HorizontalScroller'

const Reviews = () => {

  const reviews = [
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 4,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 4,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 4,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 3,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 2,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 5,
      user: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis molestias quam!'
    },
    {
      rating: 1,
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
          mt: 2
        }}
      >
        What they says
      </Typography>
      <HorizontalScroller>
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
                boxShadow: theme.vars.smoothShadow,
              }}
            >
              <Rating value={rating} readOnly />
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
      </HorizontalScroller>
    </Box>
  )
}

export default Reviews