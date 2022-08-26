import { Card, CardProps } from '@mui/material';
import { FC } from 'react';

interface Props extends CardProps {
  children: JSX.Element | JSX.Element[];
}

export const DashboardCard: FC<Props> = ({ children, sx, className }) => {
  return (
    <Card
      className={className}
      sx={{
        borderRadius: '2rem',
        boxShadow: '0 0.6rem 0.8rem -0.4rem rgba(0, 0, 0, 0.2), 0 1.25rem 2rem 0.2rem rgba(0, 0, 0, 0.14)',
        padding: '1.8rem',
        transition: 'all 300ms ease',

        '&:hover': {
          boxShadow: 'none'
        },
        ...sx
      }}
    >
      {children}
    </Card>
  );
};
