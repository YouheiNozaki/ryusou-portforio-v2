import { style } from '@vanilla-extract/css';
import { color } from '../../styles/theme';

export const ContentsStyle = {
  strong: style({
    borderBottom: `solid 2px ${color.cyan[300]}`,
  }),
};
