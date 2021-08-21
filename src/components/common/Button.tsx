import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const buttonStyles = css`
  box-sizing: border-box;
  word-break: keep-all;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
`;

export const Button = styled.button`
  ${buttonStyles}
`;
