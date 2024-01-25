import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';

import { COLORS } from '../../../../theme';
import { APP_KEYS, navigationItems } from '../../../consts';
import { SIZES } from '../../../../theme/fonts.const';

interface DropdownMenuProps {
  signOutHandler: () => void;
  email: string;
}

interface MenuItemProps {
  handler: () => void;
  title: string;
}

const Dropdowntem = ({ title, handler }: MenuItemProps) => (
  <MenuItem
    sx={{
      backgroundColor: COLORS.primary,
      color: COLORS.white,
      ':hover': {
        backgroundColor: COLORS.primary,
        color: COLORS.white
      }
    }}
    onClick={handler}
  >
    {title}
  </MenuItem>
);

const DropdownMenu = ({ email, signOutHandler }: DropdownMenuProps) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: COLORS.white,
          textTransform: 'none',
          fontSize: { xs: SIZES.m, sm: SIZES.l }
        }}
      >
        {email}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <Dropdowntem
          title={navigationItems.CHANGEPASS}
          handler={() => {
            handleClose();
            navigate(APP_KEYS.ROUTER_KEYS.CHANGE_PASSWORD);
          }}
        />
        <Dropdowntem
          title={navigationItems.SIGNOUT}
          handler={() => {
            signOutHandler();
            handleClose();
          }}
        />
      </Menu>
    </>
  );
};

export default DropdownMenu;
