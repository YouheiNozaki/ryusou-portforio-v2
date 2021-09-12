import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const HomePageStyle = {
  card: style({
    borderBottom: `solid 1px ${color.pink[200]}`,
  }),
  cardLink: style({
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: color.gray[900],
    ':hover': {
      opacity: 0.5,
      backgroundColor: color.pink[50],
    },
  }),
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
    color: color.pink[300],
  }),
  more: style({
    margin: '20px auto',
    width: '10%',
  }),
};
