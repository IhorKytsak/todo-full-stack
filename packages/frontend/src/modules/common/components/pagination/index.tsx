import React from 'react';
import { Pagination } from '@mui/material';
import { SPACES } from '../../../theme';

interface PaginationProps {
  count: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const PaginationRounded = ({ count, page, setPage }: PaginationProps) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Pagination
      sx={{
        my: SPACES.m,
        display: 'flex',
        justifyContent: 'center'
      }}
      count={count}
      page={page}
      onChange={handleChange}
      defaultPage={1}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default PaginationRounded;
