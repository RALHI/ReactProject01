import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    //Method:01 - Change the display content with the change in the Filter

    // let FilterInfo = '2019 , 2021 , 2022';

    // if (filteredYear === '2019') {
    //     FilterInfo = '2020 , 2021 , 2022';
    // } else if (filteredYear === '2020') {
    //     FilterInfo = '2019 , 2021 , 2022';
    // } else if (filteredYear === '2021') {
    //     FilterInfo = '2019 , 2020 , 2022';
    // } else {
    //     FilterInfo = '2019 , 2020 , 2021';
    // };

    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    //This code enable the filter option to select and change the expense list accordingly.
    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">

            {/* This will display the content with the changes in the filter*/}
            {/* <p>Data of {FilterInfo} is hidden</p> */}

            {/* To Fetch the data from the ExpensesFilter.jsx through the props.onChangeFilter */}
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={FilterChangeHandler} />

            {/* Display the expenses array dinamically */}

            {/* This below code will pass the message if there is no expense respect to the selected Year through the filter */}

            {/* Method 01 */}
            {filteredExpense.length === 0 && <p>No Expense Found</p>}
            {filteredExpense.length > 0 && filteredExpense.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}

            {/* Method 02 */}
            {/* {filteredExpense.length === 0 ? (<p>No Expense Found</p>) : (
                filteredExpense.map((expense) =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            )} */}

            {/*Display all the static expenses which are available in the expense array which mention in App.js */}
            {/* <ExpenseItem expenses={props.expenses[0]} />
            <ExpenseItem expenses={props.expenses[1]} />
            <ExpenseItem expenses={props.expenses[2]} />
            <ExpenseItem expenses={props.expenses[3]} /> */}

        </Card>
    );
};

export default Expenses;