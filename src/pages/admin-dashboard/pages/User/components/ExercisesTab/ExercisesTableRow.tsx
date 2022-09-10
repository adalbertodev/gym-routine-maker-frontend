import { Exercise } from '@/models';
import { Avatar, Box, Button, Link, TableCell, TableRow } from '@mui/material';
import { FC } from 'react';
import { Link as NavLink } from 'react-router-dom';

interface Props {
  data: Exercise;
}

export const ExercisesTableRow: FC<Props> = ({ data }) => {
  const { id, name, barWeight, muscle, rm } = data;

  return (
    <TableRow>
      <TableCell component='th' scope='row' className='table-id' align='left'>
        {id}
      </TableCell>
      <TableCell className='table-name' align='left'>
        {name}
      </TableCell>
      <TableCell className='table-email' align='left'>
        {muscle}
      </TableCell>
      <TableCell className='table-role' align='left'>
        {rm}
      </TableCell>

      <TableCell className='table-edit'>
        <Link component={NavLink} to={`./${id}`}>
          <Button color='primary' variant='outlined' size='small'>
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};
