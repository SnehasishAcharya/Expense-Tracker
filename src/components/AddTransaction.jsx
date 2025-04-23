import React,{useState,useContext}from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(''); 
    const {addTransaction}=useContext(GlobalContext)
    const onSubmit=e=>{
      e.preventDefault();
      const newTransaction={
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }
      console.log("Submitted",text,amount)
      addTransaction(newTransaction)
      console.log("Transaction added",newTransaction)
    }
  return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
    <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">
                Amount <br />
                (negative - expense,posetive-income)
            </label>
            <input type="number" id='amount' placeholder='Enter Amount...' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className='btn'>Add Transaction</button>
          
    </form>

    
    
      
    </>
  )
}

export default AddTransaction