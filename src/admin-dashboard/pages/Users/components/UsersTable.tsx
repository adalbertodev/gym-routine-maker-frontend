import { FC, useEffect, useState } from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { AdminCard } from '../../../styled-components';
import { convertToTableUser } from '../utils/convertToTableUser';
import { TableUser } from '../models/TableUser';
import { UsersTableContainer } from '../styled-components';
import { UsersTableRow } from './UsersTableRow';
import { useUserAPI } from '../../../../shared/hooks/useUserAPI';
import { Pagination } from '../../../components/Pagination';
import { usePagination } from '../../../hooks/usePagination';

interface Props {}

export const UsersTable: FC<Props> = () => {
  const { data, getUsers } = useUserAPI();
  const [users, setUsers] = useState<TableUser[]>([]);
  const { currentPage, maxPage, perPage, nextPage, prevPage } = usePagination({ perPage: 9, elements: users.length });

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
              .map(user => (
                <UsersTableRow data={user} key={user.id} />
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
