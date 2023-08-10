import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    // DropDownChangeHandler will execute when the user change the filter and prop.onChangeFilter will take that value on Expenses.jsx
    const DropDownChangeHandler = (event) => {
        // console.log(event.target.value);
        props.onChangeFilter(event.target.value)
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={DropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;