import { style } from '@vanilla-extract/css';
import { color } from '../../styles/theme';

export const ContentsStyle = {
  h1: style({
    marginTop: '40px',
    padding: '12px',
    color: color.gray[900],
    backgroundColor: color.cyan[50],
    borderBottom: `solid 3px ${color.cyan[500]}`,
  }),
  h2: style({
    marginTop: '40px',
    padding: '4px',
    color: color.gray[900],
    backgroundColor: color.cyan[50],
    borderBottom: `solid 3px ${color.cyan[500]}`,
  }),
  h3: style({
    marginTop: '40px',
    padding: '4px',
    color: color.gray[900],
    borderBottom: `solid 3px ${color.cyan[500]}`,
  }),
  strong: style({
    letterSpacing: '0.05rem',
    lineHeight: '1.7',
    borderBottom: `solid 3px ${color.cyan[500]}`,
  }),
  p: style({
    letterSpacing: '0.05rem',
    lineHeight: '1.7',
  }),
};
