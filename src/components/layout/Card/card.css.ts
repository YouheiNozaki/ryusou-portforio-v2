import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const CardStyle = {
  card: style({
    display: 'flex',
    flexWrap: 'wrap',
    padding: '12px',
    borderBottom: `solid 1px ${color.cyan[200]}`,
  }),
};
