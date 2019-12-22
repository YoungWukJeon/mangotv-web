import { css } from 'styled-components';

type BreakPoint = {
  desktop: number;
  tablet: number;
  phone: number;
}

// media query
const sizes: BreakPoint = {
  desktop: 1167,
  tablet: 778,
  phone: 576,
};

type Media = {
  desktop: (arg: TemplateStringsArray) => ReturnType<typeof css>;
  tablet: (arg: TemplateStringsArray) => ReturnType<typeof css>;
  phone: (arg: TemplateStringsArray) => ReturnType<typeof css>;
};

export const media: Media = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (args: TemplateStringsArray) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(args)};
    }
  `;

  return acc;
}, {});
