import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import {
  Button,
  Switch,
  FormControlLabel,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Card,
  Container,
  Tooltip
} from '@mui/material';

import { SPACES } from '../../theme';
import { APP_KEYS, actionButtonNames, tooltipTitles } from '../../common/consts';
import todoService from '../../service/todo.service';
import { useModal } from '../../common/hooks/use-modal.hook';
import Modal from '../../common/components/modal';
import { AddEditForm } from '../../common/components/add-edit-form';

const switchStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  px: SPACES.m,
  m: 0
};

const TodoPage = () => {
  const { handleClose, handleOpen, open } = useModal();
  const { id } = useParams();
  const isAddMode = !id;
  const todoId = Number(id);

  const {
    isPending,
    error,
    data: todo
  } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS, todoId],
    queryFn: () => todoService.getTodo(todoId)
  });

  if (error) {
    return <div style={{ padding: '30px' }}>Error</div>;
  }

  if (isPending) {
    return <div>Loading</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ paddingTop: SPACES.xxl }}>
      <Card sx={{ maxWidth: 700, mx: 'auto' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {todo.title}
            </Typography>

            <Typography variant="subtitle2" color="text.secondary" mt={SPACES.l}>
              {todo.description}
            </Typography>
          </CardContent>
        </CardActionArea>

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
          <Link to={APP_KEYS.ROUTER_KEYS.ROOT}>
            <Button variant="text" size="medium">
              {actionButtonNames.back}
            </Button>
          </Link>

          <Button onClick={handleOpen} variant="text" size="medium">
            {actionButtonNames.edit}
          </Button>
        </CardActions>
      </Card>

      <Modal handleClose={handleClose} open={open}>
        <AddEditForm isAddMode={isAddMode} initialValues={todo} closeModalHandler={handleClose} />
      </Modal>
    </Container>
  );
};

export default TodoPage;
