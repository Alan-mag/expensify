import React from "react";
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
    <div>
        <ExpensesSummary></ExpensesSummary>
        <ExpenseListFilters></ExpenseListFilters>
        <ExpenseList></ExpenseList>
    </div>
);

export default ExpenseDashboard;