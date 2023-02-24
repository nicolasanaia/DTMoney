export interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}