import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const LayoutStyle = {
  container: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '80px',
  }),
  wrapper: style({
    margin: '40px auto',
    display: 'flex',
    paddingTop: '90px',
    width: '80%',
    '@media': {
      'screen and (max-width: 1024px)': {
        flexDirection: 'column',
        margin: '20px auto',
        width: '80%',
      },
      'screen and (max-width: 720px)': {
        margin: '0 auto',
        width: '100%',
      },
    },
  }),
  main: style({
    width: '100%',
  }),
  section: style({
    width: '100%',
    paddingTop: '16px',
    flexBasis: '35%',
    margin: '4px',
  }),
  profile: style({
    border: `solid 1px ${color.blue[100]}`,
    padding: '12px',
    borderRadius: '4px',
  }),
  sectionTitle: style({
    color: color.gray[900],
  }),
  ul: style({
    padding: '0',
    display: 'flex',
    justifyContent: 'space-around',
  }),
  li: style({
    borderRadius: '4px',
    listStyle: 'none',
    marginRight: '12px',
  }),
  link: style({
    marginTop: '8px',
    padding: '4px 12px',
    borderRadius: '4px',
    background: color.gray[100],
  }),
};
