import { styled, TableContainer } from '@mui/material';

export const ExercisesTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: 'transparent',
  maxHeight: '600px',

  '& .MuiTableCell-head': {
    border: 'none',
    fontSize: '1rem',
    height: '2.5rem',
    // padding: 0
    padding: '0.5rem'
  },

  '& .MuiTableCell-body': {
    borderBottom: `1px solid ${theme.palette.backgroundColor.main}`,
    color: theme.palette.text.secondary,
    height: '3.6rem',
    padding: '0.5rem'
  },

  '& .table-id': {
    width: '24%'
  },
  '& .table-name': {
    width: '25%'
  },
  '& .table-email': {
    width: '25%'
  },
  '& .table-role': {
    width: '10%'
  },
  '& .table-edit': {
    width: '16%'
  }
})) as typeof TableContainer;
