import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const HomePageStyle = {
  cardLink: style({
    textDecoration: 'none',
    color: color.gray[900],
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
