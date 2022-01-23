import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const BlogsPageStyle = {
  cardWrapper: style({
    margin: '20px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '8px 0',
      },
    },
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
