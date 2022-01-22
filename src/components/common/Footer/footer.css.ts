import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const footerStyle = {
  wrapper: style({
    backgroundColor: `${color.gray[900]}`,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
  }),
  icons: style({
    margin: '0 auto',
  }),
  icon: style({
    color: `${color.white}`,
    marginRight: '4px',
    padding: '12px',
    ':hover': {
      opacity: 0.5,
    },
  }),
};
