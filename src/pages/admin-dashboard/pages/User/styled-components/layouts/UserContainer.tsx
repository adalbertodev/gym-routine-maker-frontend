import { Box, BoxProps, styled } from '@mui/material';

const Composition = ({ children, className, ...props }: BoxProps) => (
  <Box className={`page-container ${className}`} {...props}>
    {children}
  </Box>
);

export const UserContainer = styled(Composition)({
  display: 'grid',

  '& .card': {
    padding: 0,
  },
}) as typeof Box;
