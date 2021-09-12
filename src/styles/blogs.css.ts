import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const BlogsPageStyle = {
  cardLink: style({
    borderBottom: `solid 1px ${color.pink[200]}`,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    ':hover': {
      opacity: 0.5,
      backgroundColor: color.pink[50],
    },
  }),
  cardImage: style({
    lineHeight: '1.7px',
    padding: '8px',
  }),
  cardDescription: style({
    margin: '16px',
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
  }),
  cardTitle: style({
    color: color.gray[900],
    fontSize: '20px',
  }),
  cardTags: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  cardTag: style({
    marginRight: '8px',
    padding: '4px 6px',
    color: color.white,
    backgroundColor: color.pink[300],
    borderRadius: '4px',
  }),
  cardDays: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  cardDay: style({
    color: color.gray[900],
    marginRight: '12px',
    padding: '4px',
  }),
  cardDayIcon: style({
    color: color.pink[300],
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
