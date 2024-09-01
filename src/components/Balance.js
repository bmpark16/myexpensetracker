import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); 
  console.log(transactions); 

  const amounts = transactions.map(transaction => transaction.amount);
  const totalBalance = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2); 

  return (
    <div>
      <h4> Account Balance </h4> 
      <h1 id="acctBalance"> ${totalBalance} </h1>
    </div>
  )
}

export default Balance
