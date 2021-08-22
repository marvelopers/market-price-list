import React, { useCallback } from 'react';
import { InfoModalParams, ModalType, ModalDuration } from 'src/constants/modal';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalWrapper } from '../ModalWrapper';
import * as Styles from './styles';

interface InfoModalProps {
  isModalOpen: boolean;
  modalParams?: InfoModalParams;
  clearModalParams: () => void;
}

const InfoModal = ({ isModalOpen, modalParams, clearModalParams }: InfoModalProps) => {
  const clearModal = useCallback(() => {
    ModalHandler.hide(ModalType.Info);
  }, []);

  const handleClose = useCallback(() => {
    clearModal();
    modalParams?.onClose?.();
  }, [clearModal, modalParams]);

  return (
    <ModalWrapper isModalOpen={isModalOpen} duration={ModalDuration.Info} clearModalParam={clearModalParams}>
      <Styles.ModalContainer isShow={isModalOpen}>
        <Styles.ModalHead>
          <Styles.Title>{modalParams?.title}</Styles.Title>
          <Styles.CloseButton onClick={handleClose}>닫기</Styles.CloseButton>
        </Styles.ModalHead>
        <Styles.ModalContent dangerouslySetInnerHTML={{ __html: `${modalParams?.contents}` }} />
      </Styles.ModalContainer>
    </ModalWrapper>
  );
};

export default InfoModal;
