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
  selectClasses,
  IconButton
} from '@mui/joy';
import {TextField as MuiTextField} from '@mui/material'
import { theme } from '../themes';
import { KeyboardArrowDown } from '@mui/icons-material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment/moment';
import { getDateDiff } from '../utils/getDateDiff';
import { getCelenganPreset } from '../utils/getCelenganPreset';
import { useDispatch } from 'react-redux';
import { updateKeinginan } from '../store/features/keinginan/keinginanSlice';
import Swal from 'sweetalert2';


const ModalEditKeinginan = ({data}) =>{
  const [formData, setFormData] = useState({
    id: data.id,
    judul: data.judul,
    nominal: data.nominal,
    target: data.target,
    prioritas: data.prioritas,
    celengan_per_hari: data.celengan_per_hari,
    celengan_per_bulan: data.celengan_per_bulan,
  })
  console.log(data)
  const { judul, nominal, target, prioritas} = formData
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()

  const handleClick = () =>{
    setOpen(true)
  }

  const handleChange = (e) => {
    if(!e.target){
      setFormData({
        ...formData,
        target: e
      })
    }else{
      const {name, value} = e.target
      name ? setFormData({
        ...formData,
        [name]: value
      })
      : setFormData({
        ...formData,
        prioritas: Number(e.target.id)
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nominal, target} = formData
    const {days, months} = getDateDiff(target);
    const {celengan_per_bulan: cpb, celengan_per_hari: cph} = getCelenganPreset(nominal, days, months)
    const formattedTarget = moment(target).format('YYYY-MM-DD')
    dispatch(updateKeinginan(
      {...formData, target: formattedTarget, celengan_per_hari: cph, celengan_per_bulan: cpb}
    ))
      .then(res =>{
        res.type === "update/keinginan/fulfilled"
          && Swal.fire({
              icon: 'success',
              title: 'Berhasil',
              text: 'Berhasil edit keinginan!',
            })
      })
    setOpen(false);
  }

  return (
    <>
      <IconButton 
        onClick={handleClick}
        size={'sm'} 
        variant='plain'
        sx={{color: theme.vars.blue}}
      >
        <EditRoundedIcon />
      </IconButton>
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
            Edit keinginan
          </Typography>
          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={2}>
              <TextField label="judul" onChange={handleChange} name="judul" value={judul} autoFocus required />
              <TextField type='number' label="nominal" onChange={handleChange} name="nominal" value={nominal} required />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  label="set target"
                  inputFormat="MM/DD/YYYY"
                  onChange={(e) =>handleChange(e)}
                  name='target'
                  value={target}
                  sx={{zIndex: 50}}
                  disablePast
                  renderInput={(params) => <MuiTextField required name='target' variant={'standard'} {...params} />}
                />
              </LocalizationProvider>
              <FormLabel id="select-field-demo-label" htmlFor="select-prioritas">
                {`prioritas `}<span style={{ color: '#c00'}}>*</span>
              <Select
                id="select-prioritas"
                placeholder="Pilih prioritas…"
                // fixing Material UI Select Component- A component is changing a controlled input of type text to be uncontrolled
                value={prioritas ?? ''}
                name='prioritas'
                onChange={handleChange}
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
                    <Option name='prioritas' id='1' value={1}>High</Option>
                    <Option name='prioritas' id='2' value={2}>Medium</Option>
                    <Option name='prioritas' id='3' value={3}>Low</Option>
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
export default ModalEditKeinginan;