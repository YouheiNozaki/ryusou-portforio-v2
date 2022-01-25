import { style } from '@vanilla-extract/css';
import { color } from './theme';

export const ScrapPageStyle = {
  scrapDescription: style({
    display: 'flex',
    '@media': {
      'screen and (max-width: 720px)': {
        flexDirection: 'column',
      },
    },
  }),
  scrapTitle: style({
    color: color.gray[900],
    fontSize: '28px',
  }),
  scrapDays: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  scrapDay: style({
    color: color.gray[900],
    marginRight: '12px',
    padding: '4px',
  }),
  scrapDayIcon: style({
    color: color.blue[300],
  }),
  block: style({
    margin: '48px 0',
  }),
  tech: style({
    position: 'relative',
    backgroundColor: color.blue[50],
    borderRadius: '4px',
    boxSizing: 'border-box',
    padding: '16px',
  }),
  techLabel: style({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0px',
    left: '0px',
    padding: '4px 8px',
    border: `solid 1px ${color.blue[50]}`,
    borderRadius: '4px 0 0 0',
    color: color.blue[400],
    fontWeight: 'bold',
    backgroundColor: color.white,
  }),
  techText: style({
    margin: '0 0 0 8px',
  }),
  techDetail: style({
    padding: '8px 12px',
    backgroundColor: color.white,
  }),
  hobby: style({
    position: 'relative',
    backgroundColor: color.gray[50],
    border: `solid 1px ${color.gray[100]}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    padding: '16px',
  }),
  hobbyLabel: style({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0px',
    left: '0px',
    padding: '4px 8px',
    border: `solid 1px ${color.gray[50]}`,
    borderRadius: '4px 0 0 0',
    color: color.gray[400],
    fontWeight: 'bold',
    backgroundColor: color.white,
  }),
  hobbyText: style({
    margin: '0 0 0 8px',
  }),
  hobbyDetail: style({
    padding: '8px 12px',
    backgroundColor: color.gray[50],
  }),
};
