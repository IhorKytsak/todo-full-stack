import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';

import Modal from '../../common/components/modal';
import { AddEditForm } from '../../common/components/add-edit-form';
import TodoCard from '../../common/components/todo/todo-card';
import { BackdropLoader } from '../../common/components/loader';
import { SPACES } from '../../theme';
import { toastMessages } from '../../common/consts';
import { useModal } from '../../common/hooks/use-modal.hook';
import { useGetTodoQuery } from '../../common/hooks/use-todo-queries.hook';

const TodoPage = () => {
  const { handleClose, handleOpen, open } = useModal();
  const { id } = useParams();
  const isAddMode = !id;
  const todoId = Number(id);

  const { isPending, error, data: todo } = useGetTodoQuery(todoId);

  if (error) {
    toast.error(toastMessages.TODO_GET_ERROR);
  }

  if (isPending) {
    return <BackdropLoader />;
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
