/* eslint-disable no-unused-vars */
// import React from 'react'

import { useMemo, useReducer } from "react"

function reducer(state,action){
    switch (action.type) {
        case "increment" : return {count : state.count + 1};
        case "decrement" : return {count : state.count - 1};
        case "reset" : return {count : 0};
        default : return state;
    }
}

function HooksTest() {

    const [state,dispatch] = useReducer(reducer, {count : 0});

    // use memo
    const [numbers] = [1,2,3,4,5,6,7,8,9,10];

    const even = useMemo(() => {
        return  numbers.filter((n) => n % 2 == 0)
},[numbers])



  return (

    <div>
      {even.map((e) => (
        <li key={e}>e</li>
      ))}
    </div>
  )
}

export default HooksTest
