import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    backgroundColor: Palette['primary'];
    danger: Palette['primary'];
  }
  interface PaletteOptions {
    backgroundColor: PaletteOptions['primary'];
    danger: PaletteOptions['primary'];
  }
  interface CardProps {
    variant: 'admin';
  }
}

export const darkAdminTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7f5af0',
      contrastText: '#fffffe'
    },
    success: {
      main: '#2cb67d',
      dark: '#21885D'
    },
    danger: {
      main: '#B62C7D'
    },
    backgroundColor: {
      main: '#16161a',
      dark: '#0C0C0E',
      light: '#242629'
    },
    text: {
      primary: '#fffffe',
      secondary: '#94a1b2'
    },
    background: {
      default: '#16161a',
      paper: '#16161a'
      // paper: '#242629'
    }
  },
  typography: palette => ({
    h1: {
      color: palette.text.primary,
      fontSize: '1.8rem',
      fontWeight: '800'
    },
    h2: {
      color: palette.text.primary,
      fontSize: '1.4rem',
      fontWeight: 600
    },
    h3: {
      color: palette.text.primary,
      fontSize: '0.87rem',
      fontWeight: 500
    },
    subtitle1: {
      color: palette.text.secondary
    },
    subtitle2: {
      color: palette.text.secondary,
      fontSize: '0.7rem',
      fontWeight: 300
    },
    body1: {
      color: palette.text.secondary
    },
    body2: {
      color: palette.text.secondary
    },
    caption: {
      color: palette.text.secondary,
      fontSize: '0.75rem',
      fontWeight: 400
    },
    button: {
      textTransform: 'none'
    },
    fontFamily: 'Poppins, sans-serif'
  }),
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.backgroundColor.light,
          backgroundImage: 'none'
        })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    },
    MuiListItemIcon: {
      defaultProps: {
        sx: {
          color: 'inherit'
        }
      }
    },
    MuiListItemText: {
      defaultProps: {
        sx: {
          '& .MuiTypography-root': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTableCell: {
      defaultProps: {
        align: 'center'
      }
    },
    MuiIconButton: {
      defaultProps: {
        sx: {
          color: 'text.primary'
        }
      }
    },
    MuiTouchRipple: {
      defaultProps: {
        style: {
          display: 'none'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          ':active': {
            filter: 'brightness(0.8)'
          }
        }
      },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'uppercase'
          }
        }
      ]
    },
    MuiSvgIcon: {
      defaultProps: {
        sx: {
          fontSize: 'inherit'
        }
      }
    }
    // MuiCard: {
    //   defaultProps: {
    //     sx: {
    //       backgroundColor: ({ palette }) => palette.background.default,
    //       color: ({ palette }) => palette.text.secondary
    //     }
    //   }
    // },
    // MuiCardHeader: {
    //   defaultProps: {
    //     sx: {
    //       color: ({ palette }) => palette.text.primary
    //     }
    //   }
    // },

    // MuiSvgIcon: {
    //   defaultProps: {
    //     sx: {
    //       color: 'inherit'
    //     }
    //   }
    // }
  }
});
