import { Button, Checkbox, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

import { ActionWrapper } from './todo-actions.styled';
import { actionButtonNames, APP_KEYS, tooltipTitles } from '../../../consts';

interface TodoActionsProps {
  todoId: number;
  isCompleted: boolean;
  deleteHandler: () => void;
  checkboxHandler: () => void;
}

export const TodoActions = ({
  isCompleted,
  deleteHandler,
  checkboxHandler,
  todoId
}: TodoActionsProps) => (
  <ActionWrapper>
    <Link to={APP_KEYS.BACKEND_KEYS.GETTODO(todoId)}>
      <Button variant="outlined" size="small" sx={{ mr: 2 }}>
        {actionButtonNames.view}
      </Button>
    </Link>
    <Button onClick={deleteHandler} variant="outlined" size="small" sx={{ mr: 4 }}>
      {actionButtonNames.delete}
    </Button>
    <Tooltip title={tooltipTitles.COMPLETE_STATUS}>
      <span>
        <Checkbox
          size="small"
          inputProps={{ 'aria-label': 'Controlled Todo Checkbox' }}
          checked={isCompleted}
          onChange={checkboxHandler}
        />
      </span>
    </Tooltip>
  </ActionWrapper>
);
