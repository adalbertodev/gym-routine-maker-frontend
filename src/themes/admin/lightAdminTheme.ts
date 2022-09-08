import { createTheme } from '@mui/material/styles';

export const lightAdminTheme = createTheme({
  palette: {
    primary: {
      main: '#6246ea',
      contrastText: '#fffffe'
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
      primary: '#2b2c34',
      secondary: '#2b2c34'
    },
    background: {
      default: '#fffffe',
      paper: '#d1d1e9'
    }
  },
  typography: palette => ({
    h1: {
      color: palette.text.primary
    },
    h2: {
      color: palette.text.primary
    },
    subtitle1: {
      color: palette.text.secondary
    },
    body1: {
      color: palette.text.secondary
    },
    body2: {
      color: palette.text.secondary
    },
    button: {
      textTransform: 'none'
    }
  }),
  components: {
    MuiCard: {
      defaultProps: {
        sx: {
          backgroundColor: ({ palette }) => palette.background.default,
          color: ({ palette }) => palette.text.secondary
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        sx: {
          color: ({ palette }) => palette.text.primary
        }
      }
    }
  }
});
