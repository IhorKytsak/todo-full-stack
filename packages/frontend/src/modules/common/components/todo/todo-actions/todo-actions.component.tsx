import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { ActionWrapper } from './todo-actions.styled';
import { actionNames } from '../../../consts/app.consts';
import { COLORS } from '../../../../theme/colors.const';

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
  const label = { inputProps: { 'aria-label': 'Todo Checkbox' } };

  return (
    <ActionWrapper>
      <Button onClick={todoDetailsHandler} variant="outlined" size="small">
        {actionNames.view}
      </Button>
      <Button onClick={deleteHandler} variant="outlined" size="small">
        {actionNames.delete}
      </Button>
      <Tooltip title="Indicates whether this task is complete">
        <span>
          <Checkbox
            {...label}
            size="small"
            disabled
            checked={isCompleted}
            sx={{ '&.Mui-disabled': { color: COLORS.primary } }}
          />
        </span>
      </Tooltip>
    </ActionWrapper>
  );
};
