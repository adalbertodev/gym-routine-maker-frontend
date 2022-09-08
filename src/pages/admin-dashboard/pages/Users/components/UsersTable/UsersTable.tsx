import { Add as AddIcon } from '@mui/icons-material';
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';

import { usePagination, useUserAPI } from '@/hooks';
import { Pagination } from '@/pages/admin-dashboard/components/Pagination/Pagination';
import { AdminCard } from '@/pages/admin-dashboard/styled-components';
import { TableUser } from '../../models/TableUser';
import { UsersTableContainer } from '../../styled-components';
import { convertToTableUser } from '../../utils/convertToTableUser';
import { UsersTableRow } from './UsersTableRow';

export const UsersTable: FC = () => {
  const { data, getUsers } = useUserAPI();
  const [users, setUsers] = useState<TableUser[]>([]);
  const { currentPage, maxPage, perPage, nextPage, prevPage } = usePagination({
    perPage: 9,
    elements: users.length
  });

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (data !== null) {
      setUsers(convertToTableUser([...data, ...data, ...data, ...data, ...data, ...data]));
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
            <IconButton size='large'>
              <AddIcon />
            </IconButton>
          </Typography>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .filter((_user, index) => index < perPage * currentPage && index >= perPage * (currentPage - 1))
              .map((user, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <UsersTableRow data={user} key={user.id + i} />
              ))}
          </TableBody>
        </Table>
      </UsersTableContainer>

      {users.length > perPage && (
        <Pagination currentPage={currentPage} maxPage={maxPage} nextPage={nextPage} prevPage={prevPage} />
      )}
    </AdminCard>
  );
};
