import { useSubscription } from '@apollo/client'
import { Box, Card, Typography } from '@mui/joy'
import { Rating } from '@mui/material'
import React from 'react'
import { SUBS_REVIEW_LIST } from '../graphql/subs'
import { theme } from '../themes'
import HorizontalScroller from './HorizontalScroller'

const Reviews = () => {

  const {data, error, loading} = useSubscription(SUBS_REVIEW_LIST)

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
      {data?.results.map(({rating, user, comment}, idx) =>{
          return(
            <Card
              key={`${user}_${idx}`}
              sx={{
                width: '360px',
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
                {user.firstname} {user.lastname}
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