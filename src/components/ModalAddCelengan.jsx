import React, { useState } from 'react';
import {
  Button, 
  TextField, 
  Modal, 
  ModalDialog, 
  Stack, 
  Typography, 
} from '@mui/joy';
import { theme } from '../themes';
import { AddCircle } from '@mui/icons-material';
import Auth from '../utils/Auth';
import { useDispatch } from 'react-redux';
import { achieveKeinginan, addCelengan } from '../store/features/keinginan/keinginanSlice';
import Swal from 'sweetalert2';

const ModalAddCelengan = ({text, data}) =>{
  const [open, setOpen] = useState(false);
  
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const user_id = Auth.getUserId()
    const {id: keinginan_id, celengan, nominal } = data
    
    const formData = new FormData(e.target)
    const input = Number(formData.get('nominal'))
    
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
    setOpen(false)
  }

  return (
    <>
      <Button
        sx={{
          backgroundColor: theme.vars.dark, 
          color: theme.vars.light, 
          '&:hover': {backgroundColor: theme.vars.dark, opacity: 0.85}
        }}
        startDecorator={<AddCircle />}
        onClick={() => setOpen(true)}
      >
        {text}
      </Button>
      <Modal sx={{zIndex: 50, top: 100}} open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Tambah celengan
          </Typography>
          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={2}>
              <TextField type='number' autoFocus label="nominal" name="nominal" required />
              
              <Button 
                type="submit"
                sx={{
                  backgroundColor: theme.vars.dark,
                  '&:hover':{backgroundColor: theme.vars.dark, opacity: 0.85}
                }}
              >
                Tambah
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
export default ModalAddCelengan;