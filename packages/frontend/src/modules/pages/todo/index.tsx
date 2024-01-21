import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';

import Modal from '../../common/components/modal';
import { AddEditForm } from '../../common/components/add-edit-form';
import TodoCard from '../../common/components/todo/todo-card';
import Loader from '../../common/components/loader';
import todoService from '../../service/todo.service';
import { SPACES } from '../../theme';
import { APP_KEYS, toastMassages } from '../../common/consts';
import { useModal } from '../../common/hooks/use-modal.hook';

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
    toast.error(toastMassages.TODO_GET_ERROR);
  }

  if (isPending) {
    return <Loader />;
  }

  return (
    <Container maxWidth="sm" sx={{ paddingTop: SPACES.xxl }}>
      <TodoCard handleOpenEdit={handleOpen} todo={todo!} />

      <Modal handleClose={handleClose} open={open}>
        <AddEditForm isAddMode={isAddMode} initialValues={todo!} closeModalHandler={handleClose} />
      </Modal>
    </Container>
  );
};

export default TodoPage;
