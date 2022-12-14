import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { FC } from 'react';

import { AdminCard } from '../../../../styled-components';
import { DashboardTableContainer } from '../../styled-components';
import { UpdateTableRow } from './UpdateTableRow';

const createData = (name: string, type: string, section: string, sectionName: string, details: string) => {
  return { name, type, section, sectionName, details };
};

const rows = [
  createData('Adalberto1', 'created', 'users', 'Adalberto', 'Details'),
  createData('Adalberto2', 'created', 'users', 'Adalberto', 'Details'),
  createData('Adalberto3', 'created', 'users', 'Adalberto', 'Details'),
  createData('Adalberto4', 'created', 'users', 'Adalberto', 'Details')
];

export const UpdateTable: FC = () => {
  return (
    <AdminCard className='updates-table'>
      <DashboardTableContainer>
        <Box className='table-header'>
          <Typography variant='h2' component='h2'>
            Recent Updates
          </Typography>
          <Typography variant='h3' component='h3'>
            Show All
          </Typography>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Section Name</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map(row => (
              <UpdateTableRow data={row} key={row.name + row.type} />
            ))}
          </TableBody>
        </Table>
      </DashboardTableContainer>
    </AdminCard>
  );
};
