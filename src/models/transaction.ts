export interface Transaction {
  transactionId: string; // Unique ID for the transaction
  accountId: string; // The account this transaction belongs to (optional, but useful for queries)
  type: 'expense' | 'income'; // Type of transaction: either expense or income
  amount: number; // The amount of money involved in the transaction
  category: string; // Category of the transaction, e.g., "groceries", "salary"
  date: Date; // Date when the transaction occurred
  note?: string; // Optional field for any additional notes regarding the transaction
}
