import { Box, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { minHeight } from '@mui/system';
import { FC } from 'react';

import { ExercisesTableContainer } from '../../styled-components';
import { ExercisesTableRow } from './ExercisesTableRow';
import { Table } from './Table';

const createData = (name: string, barWeight: number, muscle: string, rm: number) => {
  return { name, muscle, barWeight, rm };
};

const rows = [
  createData('Press', 10, 'Pectoral', 0),
  createData('Peso', 10, 'Gluteo', 0),
  createData('Senta', 20, 'Cuadriceps', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0),
  createData('Mili', 30, 'Hombros', 0)
];

const columns = [
  ...Object.keys(rows[0]).map(row => {
    const headerName =
      row === 'id' ? row.toLocaleUpperCase() : `${row.charAt(0).toLocaleUpperCase()}${row.slice(1, row.length)}`;

    const flex = row === 'rm' ? 0.5 : row === 'barWeight' ? 0.5 : 1;

    return {
      headerName,
      field: row,
      flex
    };
  })
];

export const ExercisesTable: FC = () => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Table columns={columns} rows={rows} />
    </Box>

    // <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, auto)', rowGap: '1rem' }}>
    //   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'fit-content' }}>
    //     Cosas
    //   </Box>

    //   <ExercisesTableContainer>
    //     <Table>
    //       <TableHead>
    //         <TableRow>
    //           <TableCell align='left'>ID</TableCell>
    //           <TableCell align='left'>Name</TableCell>
    //           <TableCell align='left'>Muscle</TableCell>
    //           <TableCell align='left'>RM</TableCell>
    //         </TableRow>
    //       </TableHead>

    //       <TableBody>
    //         {rows.map((row, i) => (
    //           // eslint-disable-next-line react/no-array-index-key
    //           <ExercisesTableRow data={row} key={row.id + i} />
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </ExercisesTableContainer>
    // </Box>
  );
};
