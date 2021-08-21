import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BACKGROUND_BLUE, GREY_4, KORBIT_SKY_BLUE, WHITE } from 'src/styles/colors';

export const TabPanel = styled.div(
  ({ visible }: { visible: boolean }) => css`
    display: ${visible ? 'block' : 'none'};
  `,
);

export const TabList = styled.ul`
  box-sizing: border-box;
  color: ${GREY_4};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  padding: 0px 28px;
  margin: 0px;
`;

export const Tab = styled.li(
  ({ visible }: { visible: boolean }) => css`
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${visible ? KORBIT_SKY_BLUE : GREY_4};
    background-color: ${visible ? BACKGROUND_BLUE : WHITE};
    font-weight: ${visible ? 700 : 400};
  `,
);
