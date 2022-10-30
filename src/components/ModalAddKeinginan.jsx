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

const ModalAddKeinginan = () =>{
  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState(moment('2022-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
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
        Buat sendiri
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
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
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Fill in the information of the project.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField label="nama" autoFocus required />
              <TextField type='number' label="nominal" required />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                  label="set target"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <MuiTextField {...params} />}
                />
              </LocalizationProvider>
              <FormLabel id="select-field-demo-label" htmlFor="select-prioritas">
                {`prioritas `}<span style={{ color: '#c00'}}>*</span>
              <Select
                id="select-prioritas"
                placeholder="Pilih prioritas…"
                defaultValue={3}
                required
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: '100%',
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
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
export default ModalAddKeinginan;