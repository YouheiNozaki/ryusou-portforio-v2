import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const BlogsPageStyle = {
  cardLink: style({
    marginBottom: '20px',
    borderBottom: `solid 1px ${color.cyan[200]}`,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    '@media': {
      'screen and (max-width: 720px)': {
        paddingTop: '8px',
        flexDirection: 'column',
      },
    },
  }),
  cardTitle: style({
    color: color.gray[900],
    fontSize: '20px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '2px',
      },
    },
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
    fontSize: '16px',
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
    fontSize: '16px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '2px',
      },
    },
  }),
  cardDay: style({
    color: color.gray[900],
    marginRight: '12px',
    padding: '4px',
    '@media': {
      'screen and (max-width: 720px)': {
        margin: '2px',
      },
    },
  }),
  cardDayIcon: style({
    color: color.cyan[300],
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
