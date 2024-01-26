import { Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import ISwiper from 'swiper';
import 'swiper/css';

import { ITodoPublic } from '../../../types/todo.types';
import { useGetPublicTodosInfiniteQuery } from '../../../hooks/use-todo-queries.hook';
import { PAGE_SIZE, toastMessages } from '../../../consts';
import TodosEmpty from '../../todo/todos-empty';
import TodoTitleWithDesc from '../../todo/todo-title-with-desc';
import { SPACES } from '../../../../theme';

const PublicTodoSwiper = () => {
  const { data, isFetching, isError, hasNextPage, fetchNextPage } = useGetPublicTodosInfiniteQuery({
    pageSize: PAGE_SIZE
  });

  const todos = data?.pages.map((page) => page.todos).flat() || [];

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
            rewind
            style={{ left: 0, width: '75%', marginTop: SPACES.xl }}
            spaceBetween={50}
            onSlideChange={handleChange}
          >
            {todos.map((todo: ITodoPublic) => (
              <SwiperSlide key={todo.id}>
                <TodoTitleWithDesc todo={todo}>
                  <Typography
                    textAlign="right"
                    margin={3}
                    variant="subtitle1"
                    color="text.secondary"
                    mt={SPACES.l}
                  >
                    {todo.user.email}
                  </Typography>
                </TodoTitleWithDesc>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}
    </>
  );
};

export default PublicTodoSwiper;
