import React, {createContext, useReducer} from 'react'; 
import AppReducer from './AppReducer'

const initial = {
    transactions: []
} 

export const GlobalContext = createContext(initial); 

// Provider 
export const GlobalProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(AppReducer, initial); 

    function removeTransaction(id) { 
        dispatch({ 
            type: "DELETE", payload: id
        });
    }

    function addTransaction(transaction) { 
        dispatch({ 
            type: "ADD", payload: transaction 
        }) 
    }

    return (<GlobalContext.Provider value ={{
        transactions:state.transactions, 
        removeTransaction, 
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}