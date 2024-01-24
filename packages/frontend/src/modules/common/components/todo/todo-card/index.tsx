import { Link } from 'react-router-dom';
import { Button, Switch, FormControlLabel, CardActions, Tooltip } from '@mui/material';

import { SPACES } from '../../../../theme';
import { APP_KEYS, actionButtonNames, tooltipTitles } from '../../../consts';
import { ITodo } from '../../../types/todo.types';
import TodoTitleWithDesc from '../todo-title-with-desc';

const switchStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  px: SPACES.m,
  m: 0
};

interface TodoCardProps {
  todo: ITodo;
  handleOpenEdit: () => void;
}

const TodoCard = ({ todo, handleOpenEdit }: TodoCardProps) => (
  <TodoTitleWithDesc todo={todo}>
    <FormControlLabel
      sx={switchStyles}
      value="complete"
      control={
        <Tooltip title={tooltipTitles.EDIT_TO_CHANGE}>
          <Switch name="Complete" color="primary" />
        </Tooltip>
      }
      label="Complete"
      labelPlacement="start"
      checked={todo.isCompleted}
    />

    <FormControlLabel
      sx={switchStyles}
      value="private"
      control={
        <Tooltip title={tooltipTitles.EDIT_TO_CHANGE}>
          <Switch name="Private" color="primary" />
        </Tooltip>
      }
      label="Private"
      labelPlacement="start"
      checked={todo.isPrivate}
    />

    <CardActions>
      <Link to={APP_KEYS.ROUTER_KEYS.HOME}>
        <Button variant="text" size="medium">
          {actionButtonNames.back}
        </Button>
      </Link>

      <Button
        onClick={() => {
          handleOpenEdit();
        }}
        variant="text"
        size="medium"
      >
        {actionButtonNames.edit}
      </Button>
    </CardActions>
  </TodoTitleWithDesc>
);

export default TodoCard;
