import {
  TextField,
  Button,
  DialogActions,
  Switch,
  FormControlLabel,
  Typography
} from '@mui/material';
import { Formik } from 'formik';
import { useQueryClient } from '@tanstack/react-query';

import { StyledForm } from './add-edit-form.styled';
import { ITodo, ITodoUpdate } from '../../types/todo.types';
import { validationSchema } from '../../../validation';
import { useUpdateTodoMutation, useCreateTodoMutation } from '../../hooks/use-todo-mutations.hook';

interface AddEditFormProps {
  isAddMode: boolean;
  closeModalHandler: () => void;
  initialValues: ITodo;
}

export const AddEditForm = ({ isAddMode, closeModalHandler, initialValues }: AddEditFormProps) => {
  const queryClient = useQueryClient();

  const { mutate: createTodoMutation } = useCreateTodoMutation(queryClient, closeModalHandler);
  const { mutate: updateTodoMutation } = useUpdateTodoMutation(queryClient, closeModalHandler);

  const createTodo = (values: ITodo) => {
    createTodoMutation(values);
  };

  const updateTodo = (values: ITodoUpdate) => {
    updateTodoMutation(values);
  };

  const onSubmit = (values: ITodo | ITodoUpdate) => {
    if (isAddMode) {
      createTodo(values as ITodo);
    } else {
      updateTodo(values as ITodoUpdate);
    }
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {isAddMode ? 'New Todo' : 'Edit Todo'}
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isValid,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;
          return (
            <StyledForm onSubmit={handleSubmit}>
              <TextField
                sx={{ display: 'flex' }}
                error={Boolean(errors.title && touched.title)}
                label="Title"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.title && touched.title && errors.title}
                margin="normal"
              />

              <TextField
                sx={{ display: 'flex' }}
                error={Boolean(errors.description && touched.description)}
                label="Description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.description && touched.description && errors.description}
                margin="normal"
              />

              <FormControlLabel
                sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}
                value="complete"
                control={<Switch name="isCompleted" color="primary" />}
                label="Complete"
                name="isCompleted"
                labelPlacement="start"
                checked={values.isCompleted}
                onChange={handleChange}
              />

              <FormControlLabel
                sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}
                value="private"
                control={<Switch name="isPrivate" color="primary" />}
                label="Private"
                name="isPrivate"
                labelPlacement="start"
                checked={values.isPrivate}
                onChange={handleChange}
              />

              <DialogActions>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={isSubmitting || !dirty || !isValid}>
                  Submit
                </Button>
              </DialogActions>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};
