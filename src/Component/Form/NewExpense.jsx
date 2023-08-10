import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {


    const [isEditing, setEditing] = useState(false);

    const EditingHandler = () => {
        setEditing(true);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    };

    const saveExpenseDataHandler = (EnteredExpenseData) => {
        // console.log(EnteredExpenseData);
        props.onAddExpense(EnteredExpenseData);
        setEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={EditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;