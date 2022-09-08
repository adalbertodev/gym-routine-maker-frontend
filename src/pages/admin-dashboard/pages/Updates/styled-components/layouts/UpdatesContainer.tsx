import { Box, BoxProps, styled } from '@mui/material';

interface Props extends BoxProps {
  children: JSX.Element | JSX.Element[];
}

const Composition = ({ children, className, ...props }: Props) => (
  <Box className={`page-container ${className}`} {...props}>
    {children}
  </Box>
);

export const UpdatesContainer = styled(Composition)({
  display: 'grid',
}) as typeof Box;
