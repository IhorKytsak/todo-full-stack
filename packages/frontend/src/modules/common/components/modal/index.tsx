import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
  open: boolean;
}

const Modal = ({ children, handleClose, open }: ModalProps) => (
  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogContent
      sx={{
        px: { xs: '12px', md: '24px' },
        pb: { xs: '10px', md: '20px' }
      }}
    >
      {children}
    </DialogContent>
  </Dialog>
);

export default Modal;
