import { List, styled } from '@mui/material';

export const SideBarList = styled(List)(({ theme }) => {
  const { palette } = theme;

  return {
    '& .MuiLink-root': {
      width: '100%'
    },

    '& .MuiListItemButton-root': {
      color: palette.text.secondary,
      transition: 'color 300ms ease',
      justifyContent: 'center',
      padding: '0.85rem 0 0.85rem 1.5rem',

      ':hover': {
        color: palette.primary.main,
        backgroundColor: 'inherit',

        '.MuiListItemIcon-root': {
          marginLeft: '1rem'
        }
      },

      '&.Mui-selected': {
        backgroundColor: palette.backgroundColor.dark,
        borderLeft: `6px solid ${palette.primary.main}`,
        color: palette.primary.main,

        ':hover': {
          backgroundColor: palette.backgroundColor.dark
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
        paddingTop: '0.7rem',
        paddingBottom: '0.7rem'
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
  };
}) as typeof List;
