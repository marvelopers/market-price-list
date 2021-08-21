import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { MODAL_BACKGROUND_RGB } from 'src/styles/colors';
import { ZIndex } from 'src/styles/zIndex';

interface StyleParams {
  isShow: boolean;
  duration: number;
  backgroundColor?: string;
}

export const FixedStyle = css`
  position: fixed;
  width: 100%;
`;

export const Container = styled.section(
  ({ isShow }: StyleParams) => css`
    ${FixedStyle};
    top: 0;
    bottom: 0;
    z-index: ${ZIndex.ModalContainer};
    display: ${isShow ? 'block' : 'none'};
  `,
);

export const Wrapper = styled.div`
  ${FixedStyle};
  height: 100%;
  width: 100%;
  z-index: ${ZIndex.ModalContent};
`;

export const Background = styled.div(
  ({ isShow, backgroundColor, duration }: StyleParams) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${backgroundColor || `rgba(${MODAL_BACKGROUND_RGB}, 0.7)`};
    z-index: ${ZIndex.ModalBackground};
    animation: ${duration}ms ${showBackground};

    ${!isShow &&
    css`
      animation: ${duration}ms ${hideBackground} forwards;
    `}
  `,
);

const showBackground = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const hideBackground = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
