import { createContext, useContext, useEffect, useState } from 'react';
import { Transaction, TransactionInput, TransactionsContextData, TransactionsProviderProps } from '../components/TransactionsTable/interfaces';
import { api } from '../services/api';

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transaction_input: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transaction_input,
            createdAt: new Date(),
        });
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{
            transactions, createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}