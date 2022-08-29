import { Box, styled } from '@mui/material';

export const DashboardInfoCardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',

  '& .info-card-content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& .info-card-title': {
      fontWeight: '600',
      letterSpacing: '0.5px',
      lineHeight: '2.5',
      marginBottom: '0.35rem',
      textTransform: 'uppercase'
    },
    '& .info-card-value': {
      fontSize: '2rem',
      fontWeight: '700',
      lineHeight: '1.375'
    },
    '& .info-card-percentage-box': {
      alignItems: 'center',
      display: 'flex',

      '&.positive': {
        color: theme.palette.success.main
      },
      '&.negative': {
        color: theme.palette.danger.main
      },
      '& .percentage': {
        color: 'inherit',
        fontWeight: '400',
        lineHeight: '1.57',
        marginRight: '0.5rem'
      }
    }
  }
})) as typeof Box;
