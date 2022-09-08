import { Avatar, Box, Button, Link, TableCell, TableRow } from '@mui/material';
import { FC } from 'react';
import { Link as NavLink } from 'react-router-dom';

import { TableUser } from '../../models/TableUser';

interface Props {
  data: TableUser;
}

export const UsersTableRow: FC<Props> = ({ data }) => {
  const { id, name, email, role } = data;

  return (
    <TableRow>
      <TableCell component='th' scope='row' className='table-id'>
        {id}
      </TableCell>
      <TableCell className='table-name'>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
          <Avatar sx={{ width: '2rem', height: '2rem' }} />
          {name}
        </Box>
      </TableCell>
      <TableCell className='table-email'>{email}</TableCell>
      <TableCell className='table-role'>{role}</TableCell>

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
