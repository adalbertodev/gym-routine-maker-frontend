import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DashboardInfoCardBox: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
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
              color: ({ palette }) => palette.success.main
            },

            '&.negative': {
              color: ({ palette }) => palette.danger.main
            },

            '& .percentage': {
              color: 'inherit',
              fontWeight: '400',
              lineHeight: '1.57',
              marginRight: '0.5rem'
            }
          }
        }
      }}
    >
      {children}
    </Box>
  );
};
