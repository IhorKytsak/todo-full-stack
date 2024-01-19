import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { COLORS } from '../../../../theme/colors.const';
import { TodoActions } from '../todo-actions';

const rows = [
  {
    id: 1,
    title: 'Snow',
    description: 'lodem100wdasdasd',
    isCompleted: true
  },
  { id: 2, title: 'Lannister', description: 'Cersei', isCompleted: true },
  { id: 3, title: 'Lannister', description: 'Jaime', isCompleted: false },
  { id: 4, title: 'Stark', description: 'Arya', isCompleted: true },
  { id: 5, title: 'Targaryen', description: 'Daenerys', isCompleted: true },
  { id: 6, title: 'Melisandre', description: 'sadsadasd', isCompleted: true },
  { id: 7, title: 'Clifford', description: 'Ferrara', isCompleted: false },
  { id: 8, title: 'Frances', description: 'Rossini', isCompleted: true },
  { id: 9, title: 'Roxie', description: 'Harvey', isCompleted: true }
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: COLORS.primary, color: COLORS.white }}>
          <TableRow>
            <TableCell sx={{ color: COLORS.white }}>TODO TITLE</TableCell>
            <TableCell sx={{ color: COLORS.white }} align="left">
              Description
            </TableCell>
            <TableCell sx={{ color: COLORS.white }} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0
                }
              }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: 240
                }}
                align="left"
              >
                {row.description}
              </TableCell>
              <TableCell align="center">
                <TodoActions
                  deleteHandler={() => {}}
                  todoDetailsHandler={() => {}}
                  isCompleted={row.isCompleted}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
