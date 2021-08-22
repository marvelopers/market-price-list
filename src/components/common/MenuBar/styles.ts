import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BACKGROUND_BLUE, GREY_4, KORBIT_SKY_BLUE, WHITE } from 'src/styles/colors';

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const List = styled.ul`
  box-sizing: border-box;
  color: ${GREY_4};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  margin: 0px;
`;

export const Menu = styled.li(
  ({ selected }: { selected: boolean }) => css`
    box-sizing: border-box;
    font-size: 1rem;
    border: 0;
    margin: 0;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    color: ${selected ? KORBIT_SKY_BLUE : GREY_4};
    background-color: ${selected ? BACKGROUND_BLUE : WHITE};
    font-weight: ${selected ? 700 : 400};
  `,
);
