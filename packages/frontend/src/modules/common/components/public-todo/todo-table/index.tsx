import { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { toast } from 'react-toastify';

import { COLORS } from '../../../../theme';
import { PAGE_SIZE, toastMessages } from '../../../consts';
import { useGetPublicTodosQuery } from '../../../hooks/use-todo-queries.hook';
import { ITodoPublic } from '../../../types/todo.types';
import PaginationRounded from '../../pagination';
import { Loader } from '../../loader';
import TodosEmpty from '../../todo/todos-empty';

const PublicTodoTable = () => {
  const [page, setPage] = useState(1);

  const { isPending, isError, data } = useGetPublicTodosQuery({
    pageSize: PAGE_SIZE,
    page
  });

  const todos = data?.todos || [];

  if (isError) {
    toast.error(toastMessages.TODO_GET_ERROR);
  }

  return (
    <>
      {isPending && <Loader />}
      {!isPending && todos.length === 0 && <TodosEmpty />}
      {!isPending && todos.length !== 0 && (
        <>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
                <TableRow>
                  <TableCell sx={{ color: COLORS.white, width: '25%' }}>TODO TITLE</TableCell>
                  <TableCell sx={{ color: COLORS.white, width: '50%' }} align="left">
                    Description
                  </TableCell>
                  <TableCell sx={{ color: COLORS.white, width: '25%' }} align="center">
                    User
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  '& .MuiTableCell-root': {
                    py: 3
                  }
                }}
              >
                {todos.map((row: ITodoPublic) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0
                      }
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: 240
                      }}
                      align="left"
                    >
                      {row.description}
                    </TableCell>
                    <TableCell align="center">{row.user.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PaginationRounded count={data?.totalPages} page={page} setPage={setPage} />
        </>
      )}
    </>
  );
};

export default PublicTodoTable;
