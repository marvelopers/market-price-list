export enum ModalType {
  Alert = 'Alert',
  Info = 'Info',
}

export const ModalDuration = {
  Alert: 200,
  Info: 0,
};

export interface AlertModalParams {
  AlertMessage: string;
}

export interface InfoModalParams {
  title: string;
  contents: string;
  cancelText?: string;
  onClose?: () => void;
  onInfo?: () => void;
  onCancel?: () => void;
}

export type ModalParams = {
  [ModalType.Alert]?: AlertModalParams;
  [ModalType.Info]?: InfoModalParams;
};
