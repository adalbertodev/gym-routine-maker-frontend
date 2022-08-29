import { FC } from 'react';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { UsersTableRow } from './UsersTableRow';
import { AdminCard } from '../../../styled-components';
import { UsersTableContainer } from '../styled-components';

const createData = (id: string, name: string, email: string, role: string, action: string) => {
  return { id, name, email, role, action };
};

const rows = [
  createData(
    '3eb9fc70-f604-4dea-b658-1d80452c7454',
    'Adalberto Perdomo Abreu',
    'adalbertoperdomoabreu@email.com',
    'admin',
    'Action'
  ),
  createData('2', 'Enzo', 'enzo@email.com', 'user', 'Action'),
  createData('3', 'Angel', 'angel@email.com', 'user', 'Action'),
  createData('4', 'Eugenio', 'eugenio@email.com', 'user', 'Action')
];

interface Props {}

export const UsersTable: FC<Props> = () => {
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
            {rows.map(row => (
              <UsersTableRow data={row} key={row.name + row.id} />
            ))}
          </TableBody>
        </Table>
      </UsersTableContainer>
    </AdminCard>
  );
};
