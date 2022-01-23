import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const headerStyle = {
  wrapper: style({
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: color.white,
    borderBottom: `solid 1px ${color.blue[100]}`,
    boxShadow: `0px 8px 8px -8px ${color.blue[50]}`,
    width: '100%',
    zIndex: 10,
  }),
  image: style({
    lineHeight: '1.7px',
    border: `solid 1px ${color.blue[200]}`,
    borderRadius: '50%',
    padding: '4px',
  }),
  link: style({
    textDecoration: 'none',
  }),
  blog: style({
    fontSize: '16px',
    color: color.blue[200],
    padding: '8px 12px',
    borderRadius: '8px',
    ':hover': {
      fontWeight: 'bold',
      color: color.white,
      backgroundColor: color.blue[200],
    },
  }),
};
