import { FC, useEffect, useState } from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { AdminCard } from '../../../styled-components';
import { convertToTableUser } from '../utils/convertToTableUser';
import { TableUser } from '../models/TableUser';
import { UsersTableContainer } from '../styled-components';
import { UsersTableRow } from './UsersTableRow';
import { useUserAPI } from '../../../../shared/hooks/useUserAPI';

interface Props {}

export const UsersTable: FC<Props> = () => {
  const { data, getUsers } = useUserAPI();
  const [users, setUsers] = useState<TableUser[]>([]);

  useEffect(() => {
    getUsers();

    if (data !== null) {
      setUsers(convertToTableUser(data));
    }
  }, [data]);

  return (
    <AdminCard sx={{ height: '100%' }}>
      <UsersTableContainer>
        <Box className='table-header'>
          <Typography variant='h1' component='h1'>
            Users
          </Typography>
          <Typography variant='h3' component='h3'>
            Add User
          </Typography>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map(user => (
              <UsersTableRow data={user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      </UsersTableContainer>
    </AdminCard>
  );
};
