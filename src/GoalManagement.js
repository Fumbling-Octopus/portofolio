import React, { useState } from 'react';

function GoalType(props) {
  return (
    <p className="type"> {props.value} </p>
  )
}

export default function GoalManagement() {
  const types = ["Calcium", "Carbohydrates", "Chloesterol", "Fat", "Fiber", "Iron", "Potassium", "Protein", "Sodium", "Sugar", "Vitamin A", "Vitamin C"];

  const TypesObj = types.map((type, index) => {
    return <GoalType key={index} value={type}/>
  })

  return(
    <div>
      <header>
        <h1>
          Goal Management
        </h1>
      </header>
      {/* <button onclick="history.back()">Go Back</button> */}
      <div className="categories">
        {TypesObj}
      </div>
    </div>
  );
}