import { TextField, Button, DialogActions, Switch, FormControlLabel } from '@mui/material';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

import { toastMassages } from '../../consts';
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

  const { mutate: createTodoMutation } = useCreateTodoMutation(queryClient);
  const { mutate: updateTodoMutation } = useUpdateTodoMutation(queryClient);

  const createTodo = (values: ITodo) => {
    createTodoMutation(values, {
      onSuccess: () => {
        toast.success(toastMassages.TODO_ADD_SUCCESS);
      },
      onError: () => {
        toast.error(toastMassages.TODO_ADD_ERROR);
      },
      onSettled: () => {
        closeModalHandler();
      }
    });
  };

  const updateTodo = (values: ITodoUpdate) => {
    updateTodoMutation(values, {
      onSuccess: () => {
        toast.success(toastMassages.TODO_UPDATE_SUCCESS);
      },
      onError: () => {
        toast.error(toastMassages.TODO_UPDATE_ERROR);
      },
      onSettled: () => {
        closeModalHandler();
      }
    });
  };

  const onSubmit = (values: ITodo | ITodoUpdate) => {
    if (isAddMode) {
      createTodo(values as ITodo);
    } else {
      updateTodo(values as ITodoUpdate);
    }
  };

  return (
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
              error={Boolean(errors.title && touched.title)}
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
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </DialogActions>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
