import { ReactNode } from 'react';

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
};

export interface TransactionsProviderProps {
    children: ReactNode
};

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export type TransactionsContextData = {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}