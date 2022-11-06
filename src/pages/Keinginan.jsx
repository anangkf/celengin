import { Input, Tab, TabList, Tabs, Typography } from '@mui/joy'
import { Box, Container, FormControl } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BoxWrapper from '../components/BoxWrapper'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { theme } from '../themes'
import KeinginanList from '../components/KeinginanList';
import ModalAddKeinginan from '../components/ModalAddKeinginan';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../utils/Auth';
import { fetchKeinginanList, setCurrentTab } from '../store/features/keinginan/keinginanSlice';
import { useDebounce } from 'use-debounce';
import NotResultsImg from '../assets/img/no-results.png'

const Keinginan = () => {  
  const dispatch = useDispatch()
  const userId = Auth.getUserId()
  const keinginanList = useSelector(state => state.keinginan.data)
  const currentTab = useSelector(state => state.keinginan.currentTab)

  // const [currentTab, setCurrentTab] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [debouncedKeyword] = useDebounce(keyword, 500)
  
  let data = keinginanList

  if(debouncedKeyword){
    data = data.filter(val => {
      const judul = val.judul.toLowerCase()
      return judul.includes(debouncedKeyword.toLowerCase())
    })
  }

  const handleTabs = (_, value) =>{
    dispatch(setCurrentTab(value))
  }

  useEffect(() =>{
    userId && dispatch(fetchKeinginanList(userId))
  }, [dispatch, userId])
  
  if(currentTab === 2){
    data = data.filter(val => !val.selesai)
  }
  if(currentTab === 3){
    data = data.filter(val => val.selesai)
  }
  
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
            Menampilkan {data.length} keinginan
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
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                sx={{width: '280px'}} 
                endDecorator={<SearchRoundedIcon variant={'soft'} sx={{cursor: 'pointer'}} onClick={() => console.log('first')}/>} 
                placeholder="cari keinginan…" 
              />
            </FormControl>
            <ModalAddKeinginan text={'Buat baru'} />
          </Box>
          <Box
            sx={{display: 'flex', justifyContent: 'center', my: 3}}
          >
            <Tabs 
              defaultValue={currentTab}
              onChange={handleTabs}
              sx={{width: '80%', color: theme.vars.dark}}
            >
              <TabList>
                <Tab value={1}>Semua</Tab>
                <Tab value={2}>Berjalan</Tab>
                <Tab value={3}>Selesai</Tab>
              </TabList>
            </Tabs>
          </Box>
          {data.length > 0
            ? <KeinginanList data={data} manipulate={true}/>
            : <Box
                sx={{
                  backgroundColor: theme.vars.light,
                  height: '42vh',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  height={'50%'}
                  src={NotResultsImg}
                  alt='not-found'
                  loading='lazy'
                />
                <Typography
                  sx={{
                    color: theme.vars.dark,
                    fontSize: 'xl',
                    fontWeight: 600,
                    pt: 2
                  }}
                >
                  Upss.. keinginan dengan judul {keyword} ngga ada nih
                </Typography>
              </Box>
          }
        </BoxWrapper>
      </Container>
    </Box>
  )
}

export default Keinginan