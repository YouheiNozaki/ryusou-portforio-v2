import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const ArticleStyle = {
  cardImage: style({
    padding: '30px 16px 16px 16px',
  }),
  cardDescription: style({
    paddingLeft: '16px',
  }),
  cardInfo: style({
    display: 'flex',
    alignItems: 'center',
  }),
  cardAt: style({
    paddingLeft: '8px',
    fontSize: '12px',
  }),
  cardDayIcon: style({
    color: color.cyan[300],
  }),
};
