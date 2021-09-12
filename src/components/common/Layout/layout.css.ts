import { style } from '@vanilla-extract/css';

export const LayoutStyle = {
  container: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  wrapper: style({
    margin: '40px auto',
    width: '70%',
  }),
};
