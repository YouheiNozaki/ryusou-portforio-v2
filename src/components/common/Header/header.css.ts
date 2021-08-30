import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const headerStyle = {
  wrapper: style({
    margin: '16px',
    display: 'flex',
    alignItems: 'center',
  }),
  image: style({
    lineHeight: '1.7px',
    ':hover': {
      opacity: 0.5,
    },
  }),
  title: style({
    fontSize: 'large',
    padding: '0 16px',
  }),
  link: style({
    textDecoration: 'none',
    color: vars.color.gray[900],
    ':hover': {
      opacity: 0.5,
    },
  }),
  blog: style({
    borderLeft: `solid 1px`,
    borderColor: vars.color.gray[400],
    fontSize: 'medium',
    padding: '0 16px',
  }),
};
