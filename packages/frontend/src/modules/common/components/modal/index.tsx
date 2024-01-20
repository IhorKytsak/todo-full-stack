import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { COLORS } from '../../../theme';

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
  open: boolean;
}

function Modal({ children, handleClose, open }: ModalProps) {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <>
        <DialogTitle
          id="form-dialog-title"
          sx={{ backgroundColor: COLORS.primary, color: COLORS.white }}
        >
          Todo
        </DialogTitle>
        <DialogContent
          sx={{
            px: { xs: '5px', sm: '12px', md: '24px' },
            pb: { xs: '3px', sm: '10px', md: '20px' }
          }}
        >
          {children}
        </DialogContent>
      </>
    </Dialog>
  );
}

export default Modal;
