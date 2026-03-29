import { useState } from 'react'
import './App.css'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Salary", amount: 5000, type: "income", category: "salary", date: "2025-01-01" },
    { id: 2, description: "Rent", amount: 1200, type: "expense", category: "housing", date: "2025-01-02" },
    { id: 3, description: "Groceries", amount: 150, type: "expense", category: "food", date: "2025-01-03" },
    { id: 4, description: "Freelance Work", amount: 800, type: "expense", category: "salary", date: "2025-01-05" },
    { id: 5, description: "Electric Bill", amount: 95, type: "expense", category: "utilities", date: "2025-01-06" },
    { id: 6, description: "Dinner Out", amount: 65, type: "expense", category: "food", date: "2025-01-07" },
    { id: 7, description: "Gas", amount: 45, type: "expense", category: "transport", date: "2025-01-08" },
    { id: 8, description: "Netflix", amount: 15, type: "expense", category: "entertainment", date: "2025-01-10" },
  ]);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("food");
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

  let filteredTransactions = transactions;
  if (filterType !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.type === filterType);
  }
  if (filterCategory !== "all") {
    filteredTransactions = filteredTransactions.filter(t => t.category === filterCategory);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = Number(amount);

    if (!description.trim() || Number.isNaN(numericAmount) || numericAmount <= 0) {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description.trim(),
      amount: numericAmount,
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    };

    setTransactions([...transactions, newTransaction]);
    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("food");
  };

  const handleDeleteTransaction = (transactionId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this transaction?");
    if (!shouldDelete) {
      return;
    }

    setTransactions(transactions.filter(t => t.id !== transactionId));
  };


  return (
    <div className="app">
      <h1>Finance Tracker</h1>
      <p className="subtitle">Track your income and expenses</p>

      <Summary transactions={transactions} />

      <TransactionForm
        description={description}
        amount={amount}
        type={type}
        category={category}
        categories={categories}
        onDescriptionChange={(e) => setDescription(e.target.value)}
        onAmountChange={(e) => setAmount(e.target.value)}
        onTypeChange={(e) => setType(e.target.value)}
        onCategoryChange={(e) => setCategory(e.target.value)}
        onSubmit={handleSubmit}
      />

      <TransactionList
        filterType={filterType}
        filterCategory={filterCategory}
        categories={categories}
        filteredTransactions={filteredTransactions}
        onFilterTypeChange={(e) => setFilterType(e.target.value)}
        onFilterCategoryChange={(e) => setFilterCategory(e.target.value)}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </div>
  );
}

export default App
