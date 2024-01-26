import { CardActionArea, Typography, CardContent, Card } from '@mui/material';

import { SPACES } from '../../../../theme';
import { ITodo, ITodoPublic } from '../../../types/todo.types';

interface TodosListProps {
  todo: ITodo | ITodoPublic;
  children: React.ReactNode;
}

const TodoTitleWithDesc = ({ todo, children }: TodosListProps) => (
  <Card sx={{ mx: 'auto', mb: SPACES.m, maxWidth: '550px' }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {todo.title}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" mt={SPACES.l}>
          {todo.description}
        </Typography>
      </CardContent>
    </CardActionArea>

    {children}
  </Card>
);

export default TodoTitleWithDesc;
