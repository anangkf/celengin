import { Input, Tab, TabList, Tabs, Typography } from '@mui/joy'
import { Box, Container, FormControl } from '@mui/material'
import React, { useEffect } from 'react'
import BoxWrapper from '../components/BoxWrapper'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { theme } from '../themes'
import KeinginanList from '../components/KeinginanList';
import ModalAddKeinginan from '../components/ModalAddKeinginan';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../utils/Auth';
import { fetchKeinginanList } from '../store/features/keinginan/keinginanSlice';

const Keinginan = () => {  
  const dispatch = useDispatch()
  const userId = Auth.getUserId()
  const keinginanList = useSelector(state => state.keinginan.data)
  
  useEffect(() =>{
    userId && dispatch(fetchKeinginanList(userId))
  }, [dispatch, userId])
  
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
            Menampilkan {keinginanList.length} dari 12 keinginan
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
            <ModalAddKeinginan text={'Buat baru'} />
            {/* <Button 
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
            </Button> */}
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
          <KeinginanList data={keinginanList} manipulate={true}/>  
        </BoxWrapper>
      </Container>
    </Box>
  )
}

export default Keinginan