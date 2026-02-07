export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: "revenue" | "expense";
  source: "Freelancing" | "Apps" | "Content" | "Other";
  description: string;
}

export const transactionHistory: Transaction[] = [
  // Initial starting state - clearing the -$30K debt
  {
    id: "debt-initial",
    date: "2025-01",
    amount: 30000,
    type: "expense",
    source: "Other",
    description: "Initial Student/Business Loan",
  }
];

export const totalGrossRevenue = transactionHistory
  .filter(t => t.type === "revenue")
  .reduce((acc, curr) => acc + curr.amount, 0);

export const totalExpenses = transactionHistory
  .filter(t => t.type === "expense")
  .reduce((acc, curr) => acc + curr.amount, 0);

export const netProfit = totalGrossRevenue - totalExpenses;