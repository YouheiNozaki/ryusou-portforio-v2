import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const headerStyle = {
  wrapper: style({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    boxSizing: 'border-box',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '100%',
    zIndex: 10,
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
