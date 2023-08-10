import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (EnteredExpenseData) => {
        console.log(EnteredExpenseData);
        props.onAddExpense(EnteredExpenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;