import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ModalDuration } from 'src/constants/modal';
import { BACKGROUND_BLUE, KORBIT_SKY_BLUE } from 'src/styles/colors';
import { ZIndex } from 'src/styles/zIndex';

interface ModalContainerParams {
  isShow: boolean;
}

export const ModalContent = styled.div`
  background: ${BACKGROUND_BLUE};
  color: ${KORBIT_SKY_BLUE};
  text-align: center;
  padding: 1.8rem 2.9rem;
  border-radius: 0.5rem;
`;

export const ModalContainer = styled.div(
  ({ isShow }: ModalContainerParams) => css`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    width: 400px;
    height: 200px;
    z-index: ${ZIndex.ModalContent};
    overflow: hidden;
    ${!isShow
      ? css`
          animation: ${ModalDuration.Alert}ms ${hideModal} forwards;
        `
      : css`
          animation: ${ModalDuration.Alert}ms ${showModal};
        `};
  `,
);

const showModal = keyframes`
  0% {
    transform: translate(-50%, 20%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const hideModal = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 20%);
    opacity: 0;
  }
`;
