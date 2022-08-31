import { FC } from 'react';
import { TableRow, TableCell } from '@mui/material';

import { TableUser } from '../models/TableUser';

interface Props {
  data: TableUser;
}

export const UsersTableRow: FC<Props> = ({ data }) => {
  const { id, name, email, role, action } = data;

  return (
    <TableRow>
      <TableCell component='th' scope='row' className='table-id'>
        {id}
      </TableCell>
      <TableCell className='table-name'>{name}</TableCell>
      <TableCell className='table-email'>{email}</TableCell>
      <TableCell className='table-role'>{role}</TableCell>
      <TableCell className='table-action'>{action}</TableCell>
    </TableRow>
  );
};
