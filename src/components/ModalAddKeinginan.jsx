import React, { useState } from 'react';
import {
  Button, 
  TextField, 
  Modal, 
  ModalDialog, 
  Stack, 
  Typography, 
  FormLabel, 
  Option, 
  Select, 
  selectClasses
} from '@mui/joy';
import {TextField as MuiTextField} from '@mui/material'
import { theme } from '../themes';
import { AddCircle, KeyboardArrowDown } from '@mui/icons-material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment/moment';
import { getDateDiff } from '../utils/getDateDiff';
import Auth from '../utils/Auth';
import { getCelenganPreset } from '../utils/getCelenganPreset';
import { useDispatch } from 'react-redux';
import { createKeinginan } from '../store/features/keinginan/keinginanSlice';
import Swal from 'sweetalert2';

const ModalAddKeinginan = ({text}) =>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(moment());
  
  const dispatch = useDispatch()
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user_id = Auth.getUserId()
    const formData = new FormData(e.target)
    const judul = formData.get('nama')
    const nominal = formData.get('nominal')
    const target = formData.get('date')
    const prioritas = formData.get('prioritas')
    const {days, months} = getDateDiff(target);
    const preset = getCelenganPreset(nominal, days, months)
    
    dispatch(createKeinginan({user_id, judul, nominal, target, ...preset, prioritas}))
      .then(res =>{
        res.payload.status 
          && Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: 'Berhasil menambahkan keinginan!',
            })
      })
    setOpen(false);
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
      <Modal sx={{zIndex: 50}} open={open} onClose={() => setOpen(false)}>
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
            Buat keinginan baru
          </Typography>

          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={2}>
              <TextField label="judul" name="nama" autoFocus required />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  label="set target"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  sx={{zIndex: 50}}
                  onChange={handleChange}
                  disablePast
                  renderInput={(params) => <MuiTextField required name='date' variant={'standard'} {...params} />}
                />
              </LocalizationProvider>
              <TextField type='number' label="nominal" name="nominal" required />
              <FormLabel id="select-field-demo-label" htmlFor="select-prioritas">
                {`prioritas `}<span style={{ color: '#c00'}}>*</span>
              <Select
                id="select-prioritas"
                placeholder="Pilih prioritas…"
                defaultValue={3}
                name='prioritas'
                required
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: '100%',
                  mb: 2,
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                    <Option value={1}>High</Option>
                    <Option value={2}>Medium</Option>
                    <Option value={3}>Low</Option>
              </Select>
              </FormLabel>
              <Button 
                type="submit"
                sx={{
                  backgroundColor: theme.vars.dark,
                  '&:hover':{backgroundColor: theme.vars.dark, opacity: 0.85}
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
export default ModalAddKeinginan;