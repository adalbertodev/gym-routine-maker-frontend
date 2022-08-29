import { styled, TableContainer } from '@mui/material';

export const DashboardTableContainer = styled(TableContainer)(({ theme }) => ({
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
    borderBottom: `1px solid ${theme.palette.backgroundColor.main}`,
    color: theme.palette.text.secondary,
    height: '2.8rem',
    padding: '0.5rem'
  }
})) as typeof TableContainer;
