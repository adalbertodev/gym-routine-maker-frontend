import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { FC } from 'react';

import { DashboardTableContainer } from '../../../Dashboard';
import { UpdatesTableRow } from '../../../Updates';

const createData = (name: string, type: string, section: string, sectionName: string, details: string) => {
  return { name, type, section, sectionName, details };
};

const rows = [
  createData('Adalberto1', 'created', 'users', 'Adalberto', 'Details'),
  createData('Adalberto2', 'created', 'users', 'Adalberto', 'Details'),
  createData('Adalberto3', 'created', 'users', 'Adalberto', 'Details'),
  createData('Adalberto4', 'created', 'users', 'Adalberto', 'Details')
];

export const ExercisesTable: FC = () => {
  return (
    <DashboardTableContainer>
      <Box className='table-header'>Cosas</Box>

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
            <UpdatesTableRow data={row} key={row.name + row.type} />
          ))}
        </TableBody>
      </Table>
    </DashboardTableContainer>
  );
};
