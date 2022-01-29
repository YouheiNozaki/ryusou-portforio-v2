import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const footerStyle = {
  wrapper: style({
    backgroundColor: `${color.gray[100]}`,
    width: '100%',
    display: 'flex',
  }),
  icons: style({
    margin: '0 auto',
  }),
  icon: style({
    color: `${color.blue[400]}`,
    marginRight: '4px',
    padding: '12px',
  }),
};
