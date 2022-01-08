import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const TagStyle = {
  tag: style({
    marginRight: '8px',
    padding: '4px 6px',
    color: color.white,
    backgroundColor: color.cyan[300],
    borderRadius: '4px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '2px',
      },
    },
  }),
};
