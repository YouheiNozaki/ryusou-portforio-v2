import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const ErrorPageStyle = {
  title: style({
    color: color.gray[800],
    fontSize: '28px',
  }),
};
