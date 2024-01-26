import { useEffect, useRef } from 'react';
import { Box, CardActions } from '@mui/material';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
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
  const swiperRef = useRef<SwiperRef>(null);

  const { data, isFetching, isError, hasNextPage, fetchNextPage } = useGetTodosInfiniteQuery({
    ...filter,
    pageSize: PAGE_SIZE
  });

  const todos = data?.pages.map((page) => page.todos).flat() || [];

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current?.swiper.slideTo(0);
    }
  }, [filter]);

  const handleChange = (swiper: ISwiper) => {
    if (swiper.isEnd && hasNextPage) {
      return fetchNextPage();
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
            ref={swiperRef}
            rewind
            style={{ left: 0, width: '75%' }}
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
