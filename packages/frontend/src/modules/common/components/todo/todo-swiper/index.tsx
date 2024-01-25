import { Box, CardActions } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ITodo, ITodoUpdate } from '../../../types/todo.types';
import TodoTitleWithDesc from '../todo-title-with-desc';
import { TodoActions } from '../todo-actions';
import { Loader } from '../../loader';
import TodosEmpty from '../todos-empty';

interface TodoSwiperProps {
  isPending: boolean;
  todos: ITodo[];
  deleteTodoHandler: (id: number) => void;
  changeStatusHandler: (updatedTodo: ITodoUpdate) => void;
}

const TodoSwiper = ({
  isPending,
  todos,
  deleteTodoHandler,
  changeStatusHandler
}: TodoSwiperProps) => (
  <>
    {isPending && <Loader />}
    {!isPending && todos.length === 0 && <TodosEmpty />}
    {!isPending && todos.length !== 0 && (
      <Box marginY={4}>
        <Swiper style={{ left: 0 }} slidesPerView={1}>
          {todos.map((todo) => (
            <SwiperSlide key={todo.id}>
              <TodoTitleWithDesc todo={todo}>
                <CardActions>
                  <TodoActions
                    deleteHandler={() => {
                      deleteTodoHandler(todo.id!);
                    }}
                    checkboxHandler={() => {
                      changeStatusHandler({ id: todo.id!, isCompleted: !todo.isCompleted });
                    }}
                    todoId={todo.id!}
                    isCompleted={todo.isCompleted}
                  />
                </CardActions>
              </TodoTitleWithDesc>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    )}
  </>
);

export default TodoSwiper;
