import React, {useContext} from 'react'; 
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext); 

  let listOfIncomes = []; 
  let listofExpenses = []; 

  transactions.map(transaction => { 
    if (transaction.amount < 0) { 
      listofExpenses.push(transaction.amount)
    } else { 
      listOfIncomes.push(transaction.amount)
    }
  })

  const totalExpense = listofExpenses.reduce((acc,item) => (acc += item), 0).toFixed(2); 
  const totalIncome = listOfIncomes.reduce((acc,item) => (acc += item), 0).toFixed(2); 

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${totalIncome}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p  className="money minus">-${Math.abs(totalExpense).toFixed(2)}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses

