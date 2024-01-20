import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table
} from '@mui/material';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { COLORS } from '../../../../theme';
import { TodoActions } from '../todo-actions';
import { APP_KEYS, toastMassages } from '../../../consts';
import todoService from '../../../../service/todo.service';
import { ITodo, ITodoUpdate } from '../../../types/todo.types';

const TodoTable = () => {
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS],
    queryFn: () => todoService.getTodos()
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: (id: number) => todoService.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    }
  });

  const { mutate: updateTodoMutation } = useMutation({
    mutationFn: (body: ITodoUpdate) => todoService.updateTodo(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] });
    }
  });

  const deleteTodoHandler = (id: number) => {
    deleteTodoMutation(id, {
      onSuccess: () => {
        toast.success(toastMassages.TODO_DELETE_SUCCESS);
      },
      onError: () => {
        toast.error(toastMassages.TODO_DELETE_ERROR);
      }
    });
  };

  const changeCompleteStatusHandler = ({ id, isCompleted }: ITodoUpdate) => {
    updateTodoMutation(
      { id, isCompleted },
      {
        onSuccess: () => {
          toast.success(toastMassages.TODO_UPDATE_COMPLETE_STATUS_SUCCESS);
        },
        onError: () => {
          toast.error(toastMassages.TODO_UPDATE_COMPLETE_STATUS_ERROR);
        }
      }
    );
  };

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
  );
};

export default TodoTable;
