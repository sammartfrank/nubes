'use client';

import React, {
  createContext,
  FormEvent,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ConfirmationModal } from './types';

interface ConfirmationContextProps {
  showConfirmation: (props: ConfirmationModal) => void;
}

const ConfirmationContext = createContext<ConfirmationContextProps>({
  showConfirmation: (body: ConfirmationModal) => {
    console.log(body);
  },
});

const initialState: ConfirmationModal = {
  isOpen: false,
  backdrop: true,
};

export const ConfirmationProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ConfirmationModal>(initialState);
  const { isOpen, title, body, onClose, onConfirm, backdrop, action } = state;
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onConfirm?.();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      closeConfirmation();
    }
  };

  const closeConfirmation = () => {
    onClose?.();
    setState(initialState);
  };

  const showConfirmation = (confirmationBody: ConfirmationModal) => {
    setState(confirmationBody);
  };

  const contextValue = {
    showConfirmation: useCallback(
      (confirmationBody: ConfirmationModal) =>
        showConfirmation(confirmationBody),
      [],
    ),
  };

  return (
    <ConfirmationContext.Provider value={contextValue}>
      {children}
      {true && (
        <form >
          <Dialog>
            <DialogTrigger>{action}</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{body}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </form>
      )}
    </ConfirmationContext.Provider>
  );
};

export const useShowConfirmation = (): ConfirmationContextProps => {
  const context = useContext(ConfirmationContext);
  if (!context) {
    throw new Error(
      'useShowConfirmation must be used within a ConfirmationProvider',
    );
  }
  return context;
};
