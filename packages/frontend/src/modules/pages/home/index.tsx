import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';

import ButtonWithIcon from '../../common/components/button-with-icon';
import { AddEditForm } from '../../common/components/add-edit-form';
import Modal from '../../common/components/modal';
import TodoContainer from '../../common/components/todo/todos-container';
import { SPACES } from '../../theme';
import { initialTodoValues } from '../../common/consts';
import { useModal } from '../../common/hooks/use-modal.hook';

const HomePage = () => {
  const { handleClose, handleOpen, open } = useModal();
  const { id } = useParams();
  const isAddMode = !id;

  return (
    <Container maxWidth="lg" sx={{ paddingTop: SPACES.xxl }}>
      <ButtonWithIcon onClickHandler={handleOpen} text="Add Todo" icon={<AddIcon />} />
      <TodoContainer />

      <Modal handleClose={handleClose} open={open}>
        <AddEditForm
          isAddMode={isAddMode}
          initialValues={initialTodoValues}
          closeModalHandler={handleClose}
        />
      </Modal>
    </Container>
  );
};

export default HomePage;
