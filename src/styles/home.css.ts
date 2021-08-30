import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const HomePageStyle = {
  card: style({
    margin: '20px',
  }),
  cardLink: style({
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: vars.color.gray[900],
    ':hover': {
      opacity: 0.5,
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
  cardAt: style({
    fontSize: '12px',
  }),
};
