import Container from '@mui/material/Container';
import TodoTable from '../common/components/todo/todo-table/todo-table.component';
import { SPACES } from '../theme/spaces.const';

const HomePageContainer = () => (
  <Container maxWidth="lg" sx={{ paddingTop: SPACES.xxl }}>
    <TodoTable />
  </Container>
);

export default HomePageContainer;
