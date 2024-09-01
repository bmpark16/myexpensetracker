import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {

    const { removeTransaction } = useContext(GlobalContext); 

    let sign; 

    if (transaction.amount < 0) {
        sign = '-' 
    } else { 
        sign = '+'
    }


  return (
    <li className={sign == '+' ? 'green' : 'red'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick = {() => removeTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
