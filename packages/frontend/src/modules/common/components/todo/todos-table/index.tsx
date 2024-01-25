import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table
} from '@mui/material';

import { COLORS } from '../../../../theme';
import { TodoActions } from '../todo-actions';
import { ITodo, ITodoUpdate } from '../../../types/todo.types';
import { Loader } from '../../loader';
import TodosEmpty from '../todos-empty';
import PaginationRounded from '../../pagination';

interface TodoTableProps {
  isPending: boolean;
  todos: ITodo[];
  deleteTodoHandler: (id: number) => void;
  changeCompleteStatusHandler: (updatedTodo: ITodoUpdate) => void;
  count: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const TodosTable = ({
  isPending,
  todos,
  deleteTodoHandler,
  changeCompleteStatusHandler,
  count,
  page,
  setPage
}: TodoTableProps) => (
  <>
    {isPending && <Loader />}
    {!isPending && todos.length === 0 && <TodosEmpty />}
    {!isPending && todos.length !== 0 && (
      <>
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
            <TableBody
              sx={{
                '& .MuiTableCell-root': {
                  py: 1.5
                }
              }}
            >
              {todos.map((row: ITodo) => (
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
                      deleteHandler={() => {
                        deleteTodoHandler(row.id!);
                      }}
                      checkboxHandler={() => {
                        changeCompleteStatusHandler({ id: row.id!, isCompleted: !row.isCompleted });
                      }}
                      todoId={row.id!}
                      isCompleted={row.isCompleted}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationRounded count={count} page={page} setPage={setPage} />
      </>
    )}
  </>
);

export default TodosTable;
