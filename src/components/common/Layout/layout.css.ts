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
        width: '90%',
      },
    },
  }),
  main: style({
    margin: '20px',
    width: '100%',
    '@media': {
      'screen and (max-width: 1024px)': {
        margin: '0',
        paddingTop: '40px',
      },
    },
  }),
  section: style({
    width: '100%',
    paddingTop: '16px',
    flexBasis: '35%',
    margin: '4px',
    '@media': {
      'screen and (max-width: 1024px)': {
        margin: '0',
        paddingTop: '90px',
      },
    },
  }),
  profile: style({
    border: `solid 1px ${color.blue[100]}`,
    boxSizing: 'border-box',
    padding: '12px',
    borderRadius: '4px',
  }),
  sectionTitle: style({
    display: 'flex',
    alignItems: 'center',
  }),
  text: style({
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
    '@media': {
      'screen and (max-width: 1024px)': {
        marginRight: '2px',
      },
    },
  }),
  link: style({
    marginTop: '8px',
    padding: '4px 12px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    background: color.gray[100],
  }),
  icon: style({
    marginRight: '8px',
    lineHeight: '1.7',
    color: color.blue[400],
  }),
};
