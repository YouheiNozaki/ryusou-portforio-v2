import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const PaginationStyle = {
  main: style({
    display: 'flex',
  }),
  li: style({
    marginLeft: '12px',
    padding: '2px 8px',
    borderRadius: '4px',
    listStyle: 'none',
    // backgroundColor: color.blue[400],
  }),
  a: style({
    color: color.gray[900],
    // color: color.white,
    textDecoration: 'none',
  }),
};
