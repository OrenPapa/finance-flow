export interface Account {
  accountId: string; // Unique ID for the account
  userId: string; // The user this account belongs to (optional, but useful for queries)
  name: string; // Name of the account, e.g., "Checking Account"
  initialBalance: number; // Initial balance when the account was created
  createdAt: Date; // Timestamp for when the account was created
  updatedAt?: Date; // Optional field for when the account was last updated
}
