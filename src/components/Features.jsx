import { Box, Typography } from '@mui/joy'
import React from 'react'
import { theme } from '../themes'
import Target from '../assets/img/feature1.png'
import DailyTarget from '../assets/img/feature2.png'
import Star from '../assets/img/feature3.png'

const Features = () => {

  const features = [
    {
      iconSrc: Target,
      title: 'Target Menabung',
      content: 'Tentukan keinginanmu, wujudkan dalam waktu yang kamu inginkan.'
    },
    {
      iconSrc: DailyTarget,
      title: 'Target harian',
      content: 'Kami membantumu meraih target tepat waktu dengan tabungan harian.'
    },
    {
      iconSrc: Star,
      title: 'Prioritaskan target',
      content: 'Lebih mudah mengatur prioritas target dengan fitur ....'
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
        Our Great Features
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexBasis: '33%',
          justifyContent: 'center',
          alignItems: 'start',
          pb: 6,
          gap: 3
        }}
      > 
        {features.map(feature =>{
          return(
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <img 
                width={'120px'}
                src={feature.iconSrc} 
                alt={feature.title}
                loading='lazy'
              />
              <Typography
                sx={{
                  fontSize: 'xl3',
                  fontWeight: 600
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 'lg'
                }}
              >
                {feature.content}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Features