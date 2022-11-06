import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalDialog, Typography, FormHelperText, FormLabel, ListItem, TextField, Stack, Textarea } from '@mui/joy';
import emailjs from '@emailjs/browser';
import { theme } from '../themes';
import Auth from '../utils/Auth'
import { CONST } from '../utils/constants';
import Swal from 'sweetalert2';

export const ModalFeedback = () => {
  const {firstname} = Auth.getUserDetails()

  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({from_name: firstname, email: '', message: ''});
  
  const maxMessage = 150
  const {EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY} = CONST

  const handleChange = (e) => {    
    const {name, value} = e.target;
    setFeedback({...feedback, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    valid && setLoading(true)
    valid && emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, feedback, EMAILJS_PUBLIC_KEY)
      .then(res =>{
        if(res.status === 200){
          setLoading(false)
          setOpen(false)
          setFeedback({firstname: '', email: '', message: ''})
          Swal.fire(
            'Berhasil',
            'Terima kasih, masukan dari kamu sudah terkirim',
            'success'
          )
        }
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
        setOpen(false)
      })
  }
  
  useEffect(() =>{
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(feedback.email !== ''){
      if(!feedback.email.toLowerCase().match(emailValidation)){
        setValid(false)
      }else{
        setValid(true)
      }
    }
  }, [feedback.email])
  
  return (
    <>
      <ListItem
        onClick={()=> setOpen(true)}
        sx={{
          color: theme.vars.dark,
          transition: '1s',
          cursor: 'pointer',
          fontSize: 'md',
          '&:hover':{
            transform: 'scale(1.1)'
          }
        }}
      >
        Feedback
      </ListItem>
      <Modal open={open} sx={{top: 80}} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: 400,
            maxWidth: 600,
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
            Hai, {firstname}!
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Beritahu kami apa yang perlu diperbaiki
          </Typography>
          <Stack spacing={1}>
            <TextField
              value={feedback.email}
              name={'email'}
              label={'E-mail'}
              onChange={handleChange}
              error={!valid}
              placeholder="Placeholder" 
              autoFocus 
              required
            />
            {!valid && <FormHelperText sx={{color: theme.vars.red}}>Email tidak valid!</FormHelperText>}
            <FormLabel>Komentar</FormLabel>
            <Textarea 
              value={feedback.message}
              name={'message'}
              onChange={handleChange}
              componentsProps={{textarea:{maxLength: maxMessage}}} 
              placeholder="Placeholder" 
              minRows={2} 
              maxRows={4}
            />
            <FormHelperText>{feedback.message.length}/{maxMessage}</FormHelperText>
            <Button
              onClick={(e) => handleSubmit(e)}
              variant='solid'
              loading={loading} 
              loadingPosition="start"
              sx={{
                color: theme.vars.light,
                backgroundColor: theme.vars.dark,
                mt: 2,
                '&:hover': {
                  backgroundColor: theme.vars.dark,
                  opacity: [0.9],
                },
              }}
            >
              Kirim
            </Button>
          </Stack>
        </ModalDialog>
      </Modal>
    </>
  );
}

export default ModalFeedback;