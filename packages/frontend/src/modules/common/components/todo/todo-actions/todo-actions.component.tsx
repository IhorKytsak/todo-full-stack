import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { ActionWrapper } from './todo-actions.styled';
import { actionNames } from '../../../consts/app.consts';

interface TodoActionsInterface {
  isCompleted: boolean;
  deleteHandler: () => void;
  todoDetailsHandler: () => void;
}

export const TodoActions = ({
  isCompleted,
  deleteHandler,
  todoDetailsHandler
}: TodoActionsInterface) => {
  const label = { inputProps: { 'aria-label': 'Todo Switch' } };

  return (
    <ActionWrapper>
      <Button onClick={todoDetailsHandler} variant="outlined" size="small">
        {actionNames.view}
      </Button>
      <Button onClick={deleteHandler} variant="outlined" size="small">
        {actionNames.delete}
      </Button>
      <Switch {...label} size="small" disabled checked={isCompleted} />
    </ActionWrapper>
  );
};
