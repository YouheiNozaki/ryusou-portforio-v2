import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const ArticleStyle = {
  cardImage: style({
    lineHeight: '1.7px',
    padding: '16px',
  }),
  cardDescription: style({
    paddingLeft: '16px',
  }),
  cardTitle: style({
    fontSize: '16px',
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
