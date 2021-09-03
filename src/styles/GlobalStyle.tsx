import { injectGlobal } from '@emotion/css';
import { css, Global } from '@emotion/react';
import fonts from 'src/styles/fonts';
import { GREY_1 } from './colors';

export const inheritFont = css`
  color: inherit;
  letter-spacing: inherit;
  font-family: inherit;
`;

export const resetAppearance = css`
  appearance: none;
  background: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
`;

export const resetSpacing = css`
  margin: 0;
  padding: 0;
`;

export const a11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  border-radius: 0;
  clip: rect(0, 0, 0, 0);
`;

export const fontFamily = [
  'Spoqa Han Sans',
  'Apple SD Gothic Neo',
  '"돋움"',
  'Dotum',
  'Helvetica Neue',
  'arial',
  'sans-serif',
].join(', ');

export const resetFont = css`
  color: ${GREY_1};
  font-family: ${fontFamily};
  font-weight: 400;
  letter-spacing: -0.02em;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const ResetStyles = css`
  html {
    ${css([resetFont])}
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-size: 16px;
    line-height: 20px;
  }
  body {
    ${css([resetSpacing])};
    overflow-x: hidden;
  }
  hr {
    ${css([resetSpacing])};
  }
  p {
    ${css([resetSpacing])};
  }
  button {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${css([inheritFont, resetAppearance, resetSpacing])};
    * {
      position: relative;
    }
    &:focus {
      outline: none;
    }
  }
  input {
    ${inheritFont};
    ${resetAppearance};
    ${resetSpacing};

    &::-ms-clear {
      display: none;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }
  ul {
    list-style-type: none;
    ${css([resetSpacing])};
  }
  li {
    list-style-type: none;
    line-height: initial;
  }
  em {
    font-style: normal;
  }

  a {
    ${inheritFont};
    &:link,
    &:visited {
      text-decoration: none;
    }
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  button,
  input,
  p,
  span {
    letter-spacing: -0.02em;
  }

  * {
    .a11y {
      ${css([a11y])};
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;
    font-size: inherit;
  }

  *:focus {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  ${fonts}
  :root {
    --safe-area-inset-top: env(safe-area-inset-top);
    --safe-area-inset-bottom: calc(env(safe-area-inset-bottom) * 0.5);
    --screen-height: calc(100vh - var(--safe-area-inset-bottom));
  }
`;

const GlobalStyles = () => (
  <>
    <Global styles={ResetStyles} />
  </>
);

export default GlobalStyles;
