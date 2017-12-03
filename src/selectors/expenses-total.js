// this function computes the total amount
// given an array of expenses with an 
// amount property value.
const selectExpensesTotal = (expenses) => {
  if (expenses.length >= 2) {
    let mappedTotal = expenses.map((expense) => {
      return expense.amount;
    }).reduce((sum, value) => {
      return sum + value
    }, 0);
    return mappedTotal;
  } else if (expenses.length === 1) {
    return expenses[0].amount;
  } else {
    return 0;
  }
}

export default selectExpensesTotal;


// method in lesson -->
// export default (expenses) => {
//   return expenses
//     .map((expense) => expense.amount)
//     .reduce((sum, value) => sum + value, 0);
// }