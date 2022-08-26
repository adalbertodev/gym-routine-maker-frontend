import { List, useTheme } from '@mui/material';
import { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const SideBarList: FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <List
      sx={{
        '& .MuiLink-root': {
          width: '100%'
        },

        '& .MuiListItemButton-root': {
          color: 'text.secondary',
          transition: 'color 300ms ease',
          justifyContent: 'center',
          paddingY: '0.85rem',
          paddingLeft: '1.5rem',

          ':hover': {
            color: 'primary.main',
            backgroundColor: 'inherit',

            '.MuiListItemIcon-root': {
              marginLeft: '1rem'
            }
          },

          '&.Mui-selected': {
            backgroundColor: 'backgroundColor.dark',
            borderLeft: ({ palette }) => `6px solid ${palette.primary.main}`,
            color: 'primary.main',

            ':hover': {
              backgroundColor: 'backgroundColor.dark'
            }
          }
        },

        '& .MuiListItemIcon-root': {
          transition: 'margin 300ms ease',

          '& .MuiSvgIcon-root': {
            fontSize: '1.6rem'
          }
        },

        [theme.breakpoints.down('lg')]: {
          '& .MuiListItemButton-root': {
            paddingY: '0.7rem'
          }
        },
        [theme.breakpoints.between('md', 'lg')]: {
          '& .MuiListItemIcon-root': {
            justifyContent: 'center'
          },
          '& .MuiListItemText-root': {
            display: 'none'
          }
        }
      }}
    >
      {children}
    </List>
  );
};
