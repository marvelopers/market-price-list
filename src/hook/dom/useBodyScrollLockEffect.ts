import { useEffect } from 'react';

export const useBodyScrollLockEffect = (isOpen: boolean) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);
};
