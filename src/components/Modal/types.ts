import { ReactNode } from 'react';

export interface ModalProps {
    isModal: boolean,
    closeModal: () => void,
    children: ReactNode
}