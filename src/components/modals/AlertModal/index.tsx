import React, { useEffect } from 'react';
import { AlertModalParams, ModalDuration, ModalType } from 'src/constants/modal';
import { ModalHandler } from 'src/utils/ModalHandler';
import { ModalWrapper } from '../ModalWrapper';
import * as Styles from './styles';

const ALERT_SHOWING_TIME = 1000;

interface InfoModalProps {
  isModalOpen: boolean;
  backgroundColor: string;
  modalParams?: AlertModalParams;
  clearModalParams: () => void;
}

const AlertModal = ({ isModalOpen, backgroundColor, modalParams, clearModalParams }: InfoModalProps) => {
  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const alertTimeOut = setTimeout(() => {
      ModalHandler.hide(ModalType.Alert);
    }, ALERT_SHOWING_TIME);
    return () => clearTimeout(alertTimeOut);
  }, [isModalOpen]);

  return (
    <ModalWrapper
      isModalOpen={isModalOpen}
      backgroundColor={backgroundColor}
      duration={ModalDuration.Alert}
      clearModalParam={clearModalParams}>
      <Styles.ModalContainer isShow={isModalOpen}>
        <Styles.ModalContent>{modalParams?.AlertMessage}</Styles.ModalContent>
      </Styles.ModalContainer>
    </ModalWrapper>
  );
};

export default AlertModal;
