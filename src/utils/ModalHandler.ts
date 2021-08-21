import { ModalType, ModalParams } from 'src/constants/modal';

export type ModalEventHandler = (isShow: boolean, modalType: ModalType, params?: ModalParams[typeof modalType]) => void;

export class ModalHandler {
  static eventHandler: ModalEventHandler;

  static addModalEvent(eventHandler: ModalEventHandler) {
    this.eventHandler = eventHandler;
  }

  static show(modalType: ModalType, params: ModalParams[typeof modalType]) {
    if (this.eventHandler) {
      this.eventHandler(true, modalType, params);
    }
  }

  static hide(modalType: ModalType) {
    if (this.eventHandler) {
      this.eventHandler(false, modalType);
    }
  }
}
