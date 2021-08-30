import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const BlogsPageStyle = {
  card: style({
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `solid 1px ${vars.color.gray[400]}`,
  }),
  cardImage: style({
    lineHeight: '1.7px',
    padding: '8px',
  }),
  cardDescription: style({
    margin: '16px',
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
  }),
  cardTitle: style({
    fontSize: '20px',
  }),
  cardTags: style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  }),
  cardTag: style({
    marginRight: '8px',
    padding: '4px',
    color: vars.color.white,
    backgroundColor: vars.color.gray[600],
    borderRadius: '2px',
  }),
  cardDay: style({
    marginRight: '12px',
    padding: '4px',
  }),
};
