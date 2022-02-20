import React,{useState, useEffect} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fees',
    amount: 300,
    date: new Date(2021, 2, 24)
  },
  {
    id: 'e3',
    title: 'House Rent',
    amount: 800,
    date: new Date(2021, 5, 17)
  },
];

const App= ()=> {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE); 

    const addExpenseHandler = (expense) => {
      const updatedExpenses = [expense, ...expenses];
      setExpenses(updatedExpenses);
    }

  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>

  );
}

export default App;
