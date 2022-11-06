import { AddCircle, KeyboardArrowDown } from '@mui/icons-material'
import { Box, Button, Input, Option, Select, selectClasses, Typography } from '@mui/joy'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { achieveKeinginan, addCelengan, fetchKeinginanList } from '../store/features/keinginan/keinginanSlice'
import { theme } from '../themes'
import BoxWrapper from './BoxWrapper'
import Auth from '../utils/Auth'
import Swal from 'sweetalert2'
import { randomlyShowModalReview } from '../store/features/modal/modalSlice'

const QuickAccess = () => {
  const userId = Auth.getUserId()
  const dispatch = useDispatch()
  const keinginanList = useSelector(state => state.keinginan.data)

  const handleChange = (e) =>{
    e.preventDefault()
    const user_id = Auth.getUserId()
    const formData = new FormData(e.target)
    let selectedValue = formData.get('keinginan')
    let input = Number(formData.get('input'))
    selectedValue = selectedValue.split('_')

    let [keinginan_id, celengan, nominal] = selectedValue
    celengan = Number(celengan)
    nominal = Number(nominal)
    const amount = celengan + input
    const selesai = Boolean(amount === nominal)
    
    input < 0 
      && Swal.fire({
        icon: 'info',
        title: 'Upss',
        text: 'Ngga bisa nyelengin bilangan negatif',
      })
    if(amount <= nominal && input > 0){
      selesai && dispatch(achieveKeinginan())
      dispatch(addCelengan({keinginan_id, user_id, nominal: input, celengan: amount, selesai}))
        .then(res =>{
          if(res.payload.status){
            Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: 'Berhasil menambahkan celengan!',
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(randomlyShowModalReview())
              }
            })
          }
        })
    }else{
      Swal.fire({
        icon: 'info',
        title: 'Upss',
        text: 'Nominal yang diinput melebihi target celengan nih',
      })
    }
  }

  useEffect(() => {
    userId && dispatch(fetchKeinginanList(userId))
  }, [dispatch, userId])
  
  return (
    <BoxWrapper>
      <Typography
        fontSize= {'xl3'}
        sx={{
          fontWeight: 600
        }}
      >
        Akses cepat
      </Typography>
        <form 
          onSubmit={handleChange}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }} 
        >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            my: 2
          }}
        >
          <Select
            placeholder="Pilih celengan…"
            name="keinginan"
            indicator={<KeyboardArrowDown />}
            sx={{
              minWidth: '48%',
              [`& .${selectClasses.indicator}`]: {
                transition: '0.2s',
                [`&.${selectClasses.expanded}`]: {
                  transform: 'rotate(-180deg)',
                },
              },
            }}
          >
            {keinginanList
            .filter(val => !val.selesai)
            .map((item) =>{
              return(
                <Option key={item.id} value={`${item.id}_${item.celengan}_${item.nominal}`}>{item.judul}</Option>
              )
            })}
          </Select>
          <Input type='number' name={'input'} sx={{minWidth: '48%'}} placeholder="Masukkan nominal…" />
        </Box>
        <Button 
          startDecorator={<AddCircle />}
          type={'submit'}
          sx={{
            backgroundColor: theme.vars.dark,
            width: '120px',
            '&:hover':{
              backgroundColor: theme.vars.dark,
              opacity: 0.9
            }
          }}
        >
          celengin
        </Button>
        </form>
    </BoxWrapper>
  )
}

export default QuickAccess