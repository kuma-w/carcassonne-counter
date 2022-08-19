import { createTheme } from '@mui/material';

const commonTheme = createTheme({
  palette: {
    background: {
      default: '#71b067',
    },
  },
  typography: {
    fontSize: 12,
    h4: {
      padding: '24px',
      margin: '8px',
      fontWeight: 800,
      flexGrow: 1,
    },
  },
});

export const lightTheme = createTheme({
  ...commonTheme,
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
      styleOverrides: {
        root: {
          // border,
        },
      },
    },
  },
});
