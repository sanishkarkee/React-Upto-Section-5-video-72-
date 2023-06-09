import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e4',
    title: 'Google Pixel',
    amount: 486,
    date: new Date(2020, 5, 12),
  },
];

const App = () => {
  // yesma chai hamile child component(NewExpense.js)  data aako cha using HANDLER,,
  // yesma chai 'id', 'title','amount', 'date' sabai data aako cha form ma input gareko jati

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense, 'this is in App.js(addExpenseHandler)');
    setExpenses((prevExpenses) => {
      // console.log([...prevExpenses], 'This is old data');
      return [expense, ...prevExpenses];
    });

    // mathi ko satta ma  setExpenses([expense, ...expenses]) garda ni hunthyo tara best way mathi ko ho
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
