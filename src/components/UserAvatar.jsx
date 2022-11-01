import React, { useState } from 'react'
import Avatar from '@mui/joy/Avatar'
import { Box, MenuItem, MenuList } from '@mui/joy';
import styled from '@emotion/styled';
import { ClickAwayListener, PopperUnstyled } from '@mui/base';
import Auth from '../utils/Auth'
import { useNavigate } from 'react-router-dom';

const Popup = styled(PopperUnstyled)({
  zIndex: 1000,
});

const UserAvatar = ({initial}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      setAnchorEl(null);
    } else if (event.key === 'Escape') {
      anchorEl.focus();
      setAnchorEl(null);
    }
  };

  return (
    <>
      <Box
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        sx={{
          cursor: 'pointer'
        }}
      >
        <Avatar>{initial}</Avatar>
      </Box>
      <Popup
          role={undefined}
          id="composition-menu"
          open={open}
          anchorEl={anchorEl}
          disablePortal
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 4],
              },
            },
          ]}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList
              variant="outlined"
              onKeyDown={handleListKeyDown}
              sx={{ boxShadow: 'md', bgcolor: 'background.body', mr: 2 }}
            >
              <MenuItem onClick={handleClose}>Profil</MenuItem>
              <MenuItem onClick={handleClose}>Ganti password</MenuItem>
              <MenuItem onClick={() => Auth.logOut(navigate)}>Keluar</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Popup>
    </>
  )
}

export default UserAvatar;