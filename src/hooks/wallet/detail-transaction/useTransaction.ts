import { useState, useCallback } from 'react';
import { Transaction } from '../../../types/wallet/detail-transaction/transaction.types';
import React from 'react';

export const useTransaction = (transactionId: string) => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransaction = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Implement actual API call
      // For now, using mock data
      const mockTransaction: Transaction = {
        id: transactionId,
        type: "outgoing",
        service: "Attestation de Virement Irrévocable (AVI)",
        proformaNumber: "Proforma-classique-AVI_25894",
        category: "Document administratif",
        amount: -175.00,
        currency: "€",
        date: "30 Avril 2025",
        time: "14:32",
        status: "Payée",
        paymentMethod: "Dépôt bancaire - Banque Atlantique",
        idTransactionProforma: "PROF-78542-9021",
        fees: 0,
        balanceBefore: 250.00,
        balanceAfter: 75.00,
        linkedDocuments: [
          "Proforma-classique-AVI_25894.pdf",
          "Contrat-classique-AVI_25894.pdf",
          "AVI_25894_validé.pdf"
        ],
        subscriptionStatus: "Livré",
        embassy: "Ambassade de France au Cameroun",
        note: "",
        transactionDate: "30/04/2025 à 14:32:47",
        etudiant: {
          nom: "MBOCK",
          prenom: "Jean",
          email: "jean.mbock@gmail.com",
          telephone: "+237 698 76 54 32"
        }
      };
      setTransaction(mockTransaction);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, [transactionId]);

  // Appeler fetchTransaction au montage du composant
  React.useEffect(() => {
    fetchTransaction();
  }, [fetchTransaction]);

  return {
    transaction,
    loading,
    error
  };
}; 