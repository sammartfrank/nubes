export interface ConfirmationModal {
  action?: string;
  backdrop?: boolean;
  body?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onConfirm?: () => Promise<unknown> | void;
  title?: string;
  withInput?: boolean;
}
