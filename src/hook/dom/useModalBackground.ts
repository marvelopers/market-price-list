import { useState, useEffect } from 'react';

export const useModalBackground = (isModalOpen: boolean, duration: number) => {
  const [isShowBackground, setIsShowBackground] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsShowBackground(true);
      return () => {};
    }

    const displayTimeOut = setTimeout(() => {
      setIsShowBackground(false);
    }, duration);

    return () => {
      clearTimeout(displayTimeOut);
    };
  }, [duration, isModalOpen]);

  return isShowBackground;
};
