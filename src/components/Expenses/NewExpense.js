import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const[isEditing, setEdititng] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    isEditing(false)
  };

  const startEditingHandler = () => {
    setEdititng(true)
  }

  const stopEditingHanlder = () => {
    setEdititng(false)
  }

  return (
    <div className='new-expense'>
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHanlder} />}
    </div>
  );
};

export default NewExpense;