import React, { useState } from 'react';
import {Button, Modal, ModalDialog, Typography, FormHelperText, FormLabel, ListItem, Stack, Textarea } from '@mui/joy';
import { Rating } from '@mui/material';
import { theme } from '../themes';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../graphql/mutations';
import Auth from '../utils/Auth';
import Swal from 'sweetalert2';

export const ModalReview = () => {
  const user_id = Auth.getUserId()
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState({rating: 0, comment: ''});
  const maxComment = 80
  // console.log([review.rating, review.comment]);
  const [sendReview, { loading, error}] = useMutation(ADD_REVIEW)
  
  const handleSubmit = () =>{
    // const {rating, comment} = review
    sendReview({variables:{user_id, ...review, update_columns:["rating", "comment"]}})
      .then(() => {
        setOpen(false)
        setReview({rating: 0, comment: ''})
        Swal.fire(
          'Berhasil',
          'Terima kasih, tanggapan dari kamu bikin kami semangat!',
          'success'
        )
      })
  }

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
        Beri rating
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
            textAlign={'center'}
            mb="0.25em"
          >
            Apakah celengin cukup membantu?
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            textAlign={'center'}
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Penilaian dari kamu sangat berharga bagi kami :)
          </Typography>
          <Stack spacing={1}>
            <Rating
              name="simple-controlled"
              value={review.rating}
              size={'large'}
              sx={{alignSelf: 'center'}}
              onChange={(_, newValue) => {
                setReview({...review, rating: newValue});
              }}
            />
            <FormLabel>Komentar</FormLabel>
            <Textarea 
              value={review.comment}
              onChange={(e) => setReview({...review, comment: e.target.value})}
              componentsProps={{textarea:{maxLength: maxComment}}} 
              placeholder="Share pengalamanmu selama pakai celengin" 
              minRows={2} 
              maxRows={4}
            />
            <FormHelperText>{review.comment.length}/{maxComment}</FormHelperText>
            <Button
              onClick={() => handleSubmit()}
              variant='solid'
              loading={loading} 
              loadingPosition="start"
              sx={{
                color: theme.vars.light,
                backgroundColor: theme.vars.dark,
                px: 3,
                '&:hover': {
                  backgroundColor: theme.vars.dark,
                  opacity: [0.85]
                }
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

export default ModalReview;