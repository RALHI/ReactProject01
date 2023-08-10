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

    //Method:02 - Change the display content with the change in the Filter

    // const [FilterInfo, setFilterInfo] = useState('2019 , 2021 , 2022');

    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

        // if (selectedYear === '2020') {
        //     setFilterInfo('2019 , 2021 , 2022')
        // } else if (selectedYear === '2019') {
        //     setFilterInfo('2020 , 2021 , 2022')
        // } else if (selectedYear === '2021') {
        //     setFilterInfo('2019 , 2020 , 2022')
        // } else {
        //     setFilterInfo('2019 , 2020 , 2021')
        // }
    };

    return (
        <Card className="expenses">

            {/* This will display the content with the changes in the filter*/}
            {/* <p>Data of {FilterInfo} is hidden</p> */}

            {/* To Fetch the data from the ExpensesFilter.jsx through the props.onChangeFilter */}
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={FilterChangeHandler} />

            {/* Display the expenses array dinamically */}
            {props.expenses.map((expense) =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )};


            {/*Display all the static expenses which are available in the expense array which mention in App.js */}
            {/* <ExpenseItem expenses={props.expenses[0]} />
            <ExpenseItem expenses={props.expenses[1]} />
            <ExpenseItem expenses={props.expenses[2]} />
            <ExpenseItem expenses={props.expenses[3]} /> */}

        </Card>
    );
};

export default Expenses;