import { style } from '@vanilla-extract/css';

export const LayoutStyle = {
  container: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '80px',
  }),
  wrapper: style({
    margin: '40px auto',
    paddingTop: '90px',
    width: '70%',
    '@media': {
      'screen and (max-width: 1024px)': {
        margin: '20px auto',
        width: '80%',
      },
      'screen and (max-width: 720px)': {
        margin: '0 auto',
        width: '90%',
      },
    },
  }),
};
