import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const HomePageStyle = {
  card: style({
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    borderBottom: `solid 1px ${color.cyan[200]}`,
  }),
  cardLink: style({
    textDecoration: 'none',
    color: color.gray[900],
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
