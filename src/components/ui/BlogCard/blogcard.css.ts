import { style } from '@vanilla-extract/css';
import { color } from '../../../styles/theme';

export const BlogCardStyle = {
  cardTitle: style({
    fontSize: '16px',
    width: '100%',
  }),
  cardDescription: style({
    display: 'flex',
    '@media': {
      'screen and (max-width: 720px)': {
        width: '100%',
        flexDirection: 'column',
      },
    },
  }),
  cardTags: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '4px',
      },
    },
  }),
  cardTag: style({
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
  cardDays: style({
    display: 'flex',
    alignItems: 'center',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '2px',
      },
    },
  }),
  cardDay: style({
    marginRight: '12px',
    padding: '4px',
    fontSize: '12px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '2px',
      },
    },
  }),
  cardDayIcon: style({
    color: color.cyan[300],
  }),
};
