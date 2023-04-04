import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

// NOTE: Expensefilter.js bata data lai Expense.js ma lyaim aba chai tyo aako data lai chai state ma save garnu parcha, so use state use gareko ho

const Expenses = (props) => {
  // ExpenseFilter.js bata aako data lai store garna lai STATE use gareko yaha
  const [filteredYear, setFilteredYear] = useState('2020');

  // filterChangeHandler handler chai child component(ExpenseFilter) bata data pull garna lai use gareko ho
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); //yo chai state ma data store gareko ho
    // console.log('We are in Expenses.js');
    // console.log(selectedYear);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear} //dropdown ma default 2022 cha tara usestate('2020')cha default
          onChangeFilter={filterChangeHandler}
        />
        {/*----DATA LAI MANUALLY EK EK GARDAI DEKHAUNU BHANDA DYNAMICALLY EKAI PALTA DISPLAY HO----*/}
        {/* App.js ma bhayeko (expenses array object) ma bhayeko harek data lai <ExpenseItem/>  ma pass garcha ,yesma function ko arguement (expense) ma data pass huncha tei expense arguement lai milaune ho*/}
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        {/*-------OLD WAY to display data-----*/}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
