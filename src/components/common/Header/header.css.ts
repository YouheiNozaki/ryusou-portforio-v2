import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const headerStyle = {
  wrapper: style({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    // boxSizing: 'border-box',
    top: '0',
    left: '0',
    backgroundColor: color.gray[900],
    width: '100%',
    zIndex: 10,
  }),
  image: style({
    lineHeight: '1.7px',
  }),
  link: style({
    textDecoration: 'none',
    color: color.white,
  }),
  blog: style({
    fontSize: '16px',
    padding: '4px 8px',
    borderRadius: '4px',
    ':hover': {
      color: color.gray[900],
      backgroundColor: color.white,
    },
  }),
};
