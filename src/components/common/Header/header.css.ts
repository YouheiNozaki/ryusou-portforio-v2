import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const headerStyle = {
  wrapper: style({
    margin: '16px',
    display: 'flex',
    alignItems: 'center',
  }),
  image: style({
    padding: '4px',
    border: `solid 2px ${vars.color.pink[100]}`,
    borderRadius: '50%',
    mixBlendMode: 'multiply',
    lineHeight: '1.7px',
    ':hover': {
      opacity: 0.5,
    },
  }),
  title: style({
    color: vars.color.pink[500],
    fontSize: 'large',
    padding: '0 16px',
  }),
  link: style({
    textDecoration: 'none',
    color: vars.color.pink[300],
    ':hover': {
      opacity: 0.5,
    },
  }),
  blog: style({
    borderLeft: `solid 1px`,
    borderColor: vars.color.pink[200],
    fontSize: 'medium',
    padding: '0 16px',
  }),
};
