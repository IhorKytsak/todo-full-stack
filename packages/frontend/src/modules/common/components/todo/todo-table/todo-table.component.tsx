import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';

import { COLORS } from '../../../../theme/colors.const';
import { TodoActions } from '../todo-actions';
import { QUERY_KEYS } from '../../../consts/app-keys.const';
import todoService from '../../../../service/todo.service';
import { ITodo } from '../../../types/todo.types';

const TodoTable = () => {
  const { isPending, error, data } = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: () => todoService.getTodos()
  });

  if (error) {
    return <div>Error</div>;
  }

  if (isPending) {
    return <div>Loading</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
          <TableRow>
            <TableCell sx={{ color: COLORS.white }}>TODO TITLE</TableCell>
            <TableCell sx={{ color: COLORS.white }} align="left">
              Description
            </TableCell>
            <TableCell sx={{ color: COLORS.white }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: ITodo) => (
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
              <TableCell align="center">
                <TodoActions
                  deleteHandler={() => {}}
                  todoDetailsHandler={() => {}}
                  isCompleted={row.isCompleted}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoTable;
