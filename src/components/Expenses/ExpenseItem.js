import React, {useState} from "react";

import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";

function ExpenseItem(props) {
  useState()
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={()=>{}}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
