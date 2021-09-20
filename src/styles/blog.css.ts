import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const BlogPageStyle = {
  blogImageWrapper: style({
    padding: '8px',
    width: '100%',
    '@media': {
      'screen and (max-width: 720px)': {
        marginBottom: '20px',
      },
    },
  }),
  blogDescription: style({
    display: 'flex',
    '@media': {
      'screen and (max-width: 720px)': {
        flexDirection: 'column',
      },
    },
  }),
  blogTitle: style({
    color: color.gray[900],
    fontSize: '28px',
  }),
  blogTags: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  blogTag: style({
    marginRight: '8px',
    padding: '4px 6px',
    color: color.white,
    backgroundColor: color.cyan[300],
    borderRadius: '4px',
  }),
  blogDays: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  blogDay: style({
    color: color.gray[900],
    marginRight: '12px',
    padding: '4px',
  }),
  blogDayIcon: style({
    color: color.cyan[300],
  }),
  blogContentImg: style({
    width: '100%',
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
