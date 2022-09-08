import { styled, TableContainer } from '@mui/material';

export const UsersTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: 'transparent',
  display: 'grid',
  gridTemplateRows: 'repeat(2, auto)',
  rowGap: '1rem',

  '& .table-header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'fit-content',

    '& button': {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.backgroundColor.light,

      '&:hover': {
        backgroundColor: theme.palette.success.dark,
      },
    },
  },

  '& .MuiTableCell-head': {
    border: 'none',
    fontSize: '1rem',
    height: '2.5rem',
    padding: 0,
  },

  '& .MuiTableCell-body': {
    borderBottom: `1px solid ${theme.palette.backgroundColor.main}`,
    color: theme.palette.text.secondary,
    height: '3.6rem',
    padding: '0.5rem',
  },

  '& .table-id': {
    width: '24%',
  },
  '& .table-name': {
    width: '25%',
  },
  '& .table-email': {
    width: '25%',
  },
  '& .table-role': {
    width: '10%',
  },
  '& .table-edit': {
    width: '16%',
  },
})) as typeof TableContainer;
