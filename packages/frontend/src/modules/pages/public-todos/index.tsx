import { Box, Container } from '@mui/material';

import PublicTodoTable from '../../common/components/public-todo/todo-table';
import PublicTodoSwiper from '../../common/components/public-todo/todo-swiper';
import PublicTodosList from '../../common/components/public-todo/todo-list';
import { SPACES } from '../../theme';

const PublicTodosPage = () => (
  <Container maxWidth="lg" sx={{ paddingTop: SPACES.xxl }}>
    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
      <PublicTodoTable />
    </Box>

    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
      <PublicTodoSwiper />
    </Box>

    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <PublicTodosList />
    </Box>
  </Container>
);

export default PublicTodosPage;
