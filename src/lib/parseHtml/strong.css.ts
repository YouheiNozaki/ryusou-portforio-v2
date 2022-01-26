import { style } from '@vanilla-extract/css';
import { color } from 'styles/theme';

export const strongStyle = {
  main: style({
    background: `linear-gradient(
      transparent 70%,
      ${color.blue[200]} 80%
    );`,
  }),
};
