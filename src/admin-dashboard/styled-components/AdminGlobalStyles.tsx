import { GlobalStyles, GlobalStylesProps, styled } from '@mui/material';

const Composition = ({ styles, ...props }: GlobalStylesProps) => (
  <GlobalStyles
    styles={theme => ({
      ':root': {
        '--appbar-height': '70px',
        '--container-width': '96%',
        '--sidebar-width': '14rem'
      },

      [theme.breakpoints.down('lg')]: {
        ':root': {
          '--container-width': '94%',
          '--sidebar-width': '7rem'
        }
      },
      [theme.breakpoints.down('md')]: {
        ':root': {
          '--container-width': '98%'
        }
      }
    })}
    {...props}
  />
);

export const AdminGlobalStyles = styled(Composition)({}) as typeof GlobalStyles;
