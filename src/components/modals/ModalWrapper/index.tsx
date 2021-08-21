import React, { useRef, useEffect, MouseEventHandler, ReactNode, useCallback } from 'react';
import { useBodyScrollLockEffect } from 'src/hook/dom/useBodyScrollLockEffect';
import { useModalBackground } from 'src/hook/dom/useModalBackground';
import * as Styles from './styles';

interface ModalWrapperProps {
  children: ReactNode;
  isModalOpen: boolean;
  duration?: number;
  backgroundColor?: string;
  clearModalParam?: () => void;
  onClickBackground?: () => void;
}

export const ModalWrapper = ({
  children,
  isModalOpen,
  duration = 0,
  backgroundColor,
  onClickBackground,
  clearModalParam,
}: ModalWrapperProps) => {
  const isShowBackground = useModalBackground(isModalOpen, duration);
  const wrapperRef = useRef(null);

  useBodyScrollLockEffect(isShowBackground);

  const handleClickContent: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === wrapperRef.current) {
        onClickBackground?.();
      }
    },
    [onClickBackground],
  );

  useEffect(() => {
    if (!isShowBackground) {
      clearModalParam?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowBackground]);

  return (
    <Styles.Container isShow={isShowBackground} duration={duration}>
      <Styles.Background isShow={isModalOpen} backgroundColor={backgroundColor} duration={duration} />
      <Styles.Wrapper ref={wrapperRef} onClick={handleClickContent}>
        {children}
      </Styles.Wrapper>
    </Styles.Container>
  );
};
