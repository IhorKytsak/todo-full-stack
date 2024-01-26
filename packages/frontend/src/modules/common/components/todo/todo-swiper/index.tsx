import { Box, CardActions } from '@mui/material';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import ISwiper from 'swiper';
import 'swiper/css';

import { ITodoFilters, ITodoUpdate } from '../../../types/todo.types';
import TodoTitleWithDesc from '../todo-title-with-desc';
import { TodoActions } from '../todo-actions';
import TodosEmpty from '../todos-empty';
import { useGetTodosInfiniteQuery } from '../../../hooks/use-todo-queries.hook';
import { PAGE_SIZE, toastMessages } from '../../../consts';

interface TodoSwiperProps {
  deleteTodoHandler: (id: number) => void;
  changeStatusHandler: (updatedTodo: ITodoUpdate) => void;
  filter: ITodoFilters;
}

const TodoSwiper = ({ filter, deleteTodoHandler, changeStatusHandler }: TodoSwiperProps) => {
  const { data, isFetching, isError, hasNextPage, fetchNextPage } = useGetTodosInfiniteQuery({
    ...filter,
    pageSize: PAGE_SIZE
  });

  const todos = data?.pages.map((page) => page.todos).flat() || [];

  const handleChange = (swiper: ISwiper) => {
    if (swiper.activeIndex === todos.length - 1) {
      if (hasNextPage && !isFetching) fetchNextPage();
    }
  };

  if (isError) {
    toast.error(toastMessages.TODO_GET_ERROR);
  }

  return (
    <>
      {!isFetching && todos.length === 0 && <TodosEmpty />}
      {todos.length !== 0 && (
        <Box marginY={4}>
          <Swiper
            style={{ left: 0, width: '75%' }}
            rewind
            spaceBetween={50}
            onSlideChange={handleChange}
          >
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
};

export default TodoSwiper;
