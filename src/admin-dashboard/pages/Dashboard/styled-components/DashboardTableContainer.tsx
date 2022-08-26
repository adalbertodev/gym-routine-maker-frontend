import { Card, TableContainer } from '@mui/material';
import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DashboardTableContainer: FC<Props> = ({ children }) => {
  return (
    <TableContainer
      sx={{
        backgroundColor: 'transparent',
        display: 'grid',
        gridTemplateRows: '3.5rem auto',

        '& .table-header': {
          display: 'flex',
          justifyContent: 'space-between'
        },

        '& .MuiTableCell-head': {
          border: 'none',
          fontSize: '1rem',
          height: '2.5rem',
          padding: 0
        },

        '& .MuiTableCell-body': {
          borderBottom: ({ palette }) => `1px solid ${palette.backgroundColor.main}`,
          color: 'text.secondary',
          height: '2.8rem',
          padding: '0.5rem'
        }
      }}
    >
      {children}
    </TableContainer>
  );
};
