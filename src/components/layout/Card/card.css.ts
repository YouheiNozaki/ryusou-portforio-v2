import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const CardStyle = {
  card: style({
    display: 'flex',
    padding: '12px 12px 12px 20px',
    border: `solid 1px ${color.blue[100]}`,
    boxSizing: 'border-box',
    borderRadius: '8px',
    ':hover': {
      boxShadow: `8px 8px 8px -8px ${color.blue[50]}`,
    },
  }),
  cardColumn: style({
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 12px 12px 20px',
    border: `solid 1px ${color.blue[100]}`,
    boxSizing: 'border-box',
    borderRadius: '8px',
    ':hover': {
      boxShadow: `8px 8px 8px -8px ${color.blue[50]}`,
    },
  }),
};
