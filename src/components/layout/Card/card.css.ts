import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const CardStyle = {
  card: style({
    display: 'flex',
    padding: '12px',
    borderBottom: `solid 1px ${color.cyan[200]}`,
  }),
  cardColumn: style({
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    borderBottom: `solid 1px ${color.cyan[200]}`,
  }),
};
