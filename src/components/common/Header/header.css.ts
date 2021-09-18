import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const headerStyle = {
  wrapper: style({
    margin: '16px',
    display: 'flex',
    alignItems: 'center',
  }),
  image: style({
    padding: '4px',
    border: `solid 2px ${color.cyan[100]}`,
    borderRadius: '50%',
    mixBlendMode: 'multiply',
    lineHeight: '1.7px',
    ':hover': {
      opacity: 0.5,
    },
  }),
  title: style({
    color: color.cyan[500],
    fontSize: 'large',
    padding: '0 16px',
  }),
  link: style({
    textDecoration: 'none',
    color: color.cyan[300],
    ':hover': {
      opacity: 0.5,
    },
  }),
  blog: style({
    borderLeft: `solid 1px`,
    borderColor: color.cyan[200],
    fontSize: 'medium',
    padding: '0 16px',
  }),
};
