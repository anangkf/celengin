import { extendTheme } from "@mui/joy";
import { experimental_extendTheme as extendMuiTheme, colors } from '@mui/material';

export const theme = extendTheme({
  vars:{
    yellow: '#FF9F1C',
    dark: '#011627',
    secondary: '#475356',
    light: '#FDFFFC',
    softGray: '#EDE1E1',
    blue: '#2E86AB',
    softBlue: '#2EC4B6',
    green: '#3DC926',
    red: '#F24236',
    shadow: '0px 2px 18px 4px rgba(0, 0, 0, 0.25)',
  },
  fontFamily: {
    body: 'Outfit, sans-serif',
    color: '#011627'
  },
  // typography: {
  //   fontColor: '#011627',
  // },
})

export const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: colors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: colors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});