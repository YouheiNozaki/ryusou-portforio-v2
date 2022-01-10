import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const heading1Style = {
  title: style({
    color: color.cyan[500],
    fontSize: '20px',
    padding: '0 16px',
  }),
};
