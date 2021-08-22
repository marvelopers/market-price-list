import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ModalDuration } from 'src/constants/modal';
import { BACKGROUND_BLUE, GREY_1, WHITE } from 'src/styles/colors';
import { ZIndex } from 'src/styles/zIndex';
import { Button } from 'src/components/common/Button';

interface ModalContainerParams {
  isShow: boolean;
}

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const CloseButton = styled(Button)`
  width: 24px;
  height: 24px;
  color: ${GREY_1};
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 0.25rem 1rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid ${GREY_1};
`;

export const IconWrapper = styled.div`
  width: 17px;
  height: 17px;
`;

export const ModalHead = styled.div`
  box-sizing: border-box;
  background: ${BACKGROUND_BLUE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  height: 58px;
  z-index: ${ZIndex.ModalContent};
  box-shadow: 0px 7px 12px rgba(231, 231, 231, 0.3);
`;

export const ModalContent = styled.div`
  background: ${WHITE};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 1.5rem;
  overflow-y: scroll;
  padding: 2rem 1.5rem;
`;

export const ModalContainer = styled.div(
  ({ isShow }: ModalContainerParams) => css`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    width: 600px;
    height: 680px;
    z-index: ${ZIndex.ModalContent};
    overflow: hidden;
    ${!isShow
      ? css`
          animation: ${ModalDuration.Info}ms ${hideModal} forwards;
        `
      : css`
          animation: ${ModalDuration.Info}ms ${showModal};
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
