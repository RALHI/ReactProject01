import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    //intiallised the state to get the data.
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    //Change Handler to fetch the data from the form which is entered by the user.
    const TitleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };

    const AmountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        });
    };

    const DateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        });
    };

    //will executed after the form submittion
    const AddNewExpense = (event) => {
        //prevernt the default event of the submit buttton
        event.preventDefault();

        //variable created to store the expense data entered by the user
        const expenseData = {
            id: Math.random().toString(),
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        // through this code we can clear the input fields after submitting the form.
        setUserInput(() => {
            return {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: '',
            };
        });

        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
    };

    return (
        <form onSubmit={AddNewExpense}>
            <div className='new-expense__control'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={TitleChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={userInput.enteredAmount} onChange={AmountChangeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" value={userInput.enteredDate} onChange={DateChangeHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelEditing}>Cancel Expense</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;