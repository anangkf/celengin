import { Button, FormLabel, IconButton, Input, Tab, TabList, Tabs, Typography } from '@mui/joy'
import { Box, Container, FormControl, Skeleton } from '@mui/material'
import React, { useEffect } from 'react'
import BoxWrapper from '../components/BoxWrapper'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { theme } from '../themes'
import { AddCircle } from '@mui/icons-material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import KeinginanList from '../components/KeinginanList';
import { useState } from 'react';

const Keinginan = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  
  const keinginanList = [
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
        backgroundColor: theme.vars.softGray
      }}
    >
      <Container
        sx={{
          pt: 7,
          pb: 2,
          minHeight: '100vh',
        }}
      >
        <BoxWrapper>
          <Typography
            fontSize= {'xl3'}
            sx={{
              fontWeight: 600
            }}
          >
            Keinginanku
          </Typography>
          <Typography>
            Menampilkan 5 dari 12 keinginan
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              my: 3
            }}
          >
            <FormControl>
              {/* <FormLabel>cari</FormLabel> */}
              <Input 
                sx={{width: '280px'}} 
                endDecorator={<SearchRoundedIcon variant={'soft'} sx={{cursor: 'pointer'}} onClick={() => console.log('first')}/>} 
                placeholder="cari keinginan…" 
              />
            </FormControl>
            <Button 
              startDecorator={<AddCircle />}
              sx={{
                backgroundColor: theme.vars.dark,
                width: '150px',
                '&:hover':{
                  backgroundColor: theme.vars.dark,
                  opacity: 0.9
                }
              }}
            >
              Buat baru
            </Button>
          </Box>
          <Box
            sx={{display: 'flex', justifyContent: 'center', my: 3}}
          >
            <Tabs 
              defaultValue={1}
              onChange={((event, value) => console.log({event, value}))}
              sx={{width: '80%', color: theme.vars.dark}}
            >
              <TabList>
                <Tab value={1}>Semua</Tab>
                <Tab value={2}>Berjalan</Tab>
                <Tab value={3}>Selesai</Tab>
              </TabList>
            </Tabs>
          </Box>
          {!loading 
            ? <KeinginanList data={keinginanList} manipulate={true}/>
            : <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: theme.vars.softGray,
                  borderRadius: '12px',
                  height: '100px',
                  cursor: 'pointer',
                  my: 1,
                  p: 2
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {loading ? <Skeleton width={'180px'} /> : 'Beli judul'}
                  </Typography>
                  <Typography>{loading ? <Skeleton width={'120px'} /> : '1 bulan'}</Typography>
                </Box>
                <Box sx={{
                  display: 'flex', 
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 2
                  }}
                >
                  <Box sx={{display: 'flex',flexDirection: 'column', alignItems: 'end'}}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        mb: 1
                      }}
                    >
                      {loading ? <Skeleton width={'120px'} /> : 'Rp. 1.000.000'}
                    </Typography>
                    <Typography sx={{color: theme.vars.green}}>{loading ? <Skeleton width={'140px'} /> : 'Rp. 12.000/hari'}</Typography>
                  </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column',justifyContent: 'space-between'}}>
                      {loading
                        ? <Skeleton variant="rectangular" width={28} height={28}/>
                        : <IconButton 
                            size={'sm'} 
                            variant='plain'
                            sx={{color: theme.vars.blue}}
                          >
                            <EditRoundedIcon />
                          </IconButton>
                      }
                      {loading
                        ? <Skeleton variant="rectangular" width={28} height={28}/>
                        : <IconButton 
                            size={'sm'} 
                            variant='plain'
                            sx={{color: theme.vars.red, '&:hover': {backgroundColor: 'rgba(242, 66, 54, 0.3)'}}}
                          >
                            <DeleteRoundedIcon />
                          </IconButton>
                      }
                    </Box>
                </Box>
              </Box>
          }
        </BoxWrapper>
      </Container>
    </Box>
  )
}

export default Keinginan