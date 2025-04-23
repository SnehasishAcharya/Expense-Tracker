import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState' 
export const moneyFormatter = (value) => {
  const num = Number(value);

  if (isNaN(num)) return '₹0.00';

  return (num < 0 ? '-' : '') +
    '₹' +
    Math.abs(num)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const Balance = () => {
  const {transactions}=useContext(GlobalContext); 
  const amounts=transactions.map(transaction=>transaction.amount)
  const total=amounts.reduce((acc,item)=>acc+item,0);
  return (
    <>
       <h4>Your Balance</h4>
       <h1 id="balance">{moneyFormatter(total)}</h1>
    </>
  )
}

export default Balance
