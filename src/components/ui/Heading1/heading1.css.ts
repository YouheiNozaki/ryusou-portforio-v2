import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const heading1Style = {
  title: style({
    color: color.blue[400],
    fontSize: '20px',
    padding: '0 16px',
  }),
};
