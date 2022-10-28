import { extendTheme } from "@mui/joy";

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