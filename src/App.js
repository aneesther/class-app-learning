// REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  addCount,
  decrementCount,
  incrementCount,
  resetCount,
} from "./redux/countSlice";
import { useState } from "react";

export default function App() {
  const count = useSelector((state) =>state.count.count);
  const dispatch =useDispatch();
  const [value, setValue] = useState(2);

  const incrementNum = Number(value) || 0;

  function increment() {
    dispatch(incrementCount());
  }
  function decrement() {
    dispatch(decrementCount());
  }
  function increasedAmt(){
    dispatch(addCount(incrementNum));
  }

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <p>{count}</p>
      <div className="btn-group">
        <input 
           value={value}
           onChange={(e) => setValue(e.target.value)}
           type="text"
        />
        <button onClick={() => increment()}>Increment</button>
        <button disabled ={count === 0} onClick={()=> decrement}>
          Decrement
        </button>
        <button onClick={() => increasedAmt()}>Add Count</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </div>
    </div>
  );
}

// import React, {useState, createContext } from 'react';


// import './App.css';
// import './components/navbar.css';
// import { Outlet} from 'react-router-dom';
// import { ScrollRestoration } from 'react-router-dom';

// function App() {
//   return (
//     <div className='App'>
//       <ScrollRestoration />
//       <Outlet />
      
//     </div>
//   );
// }

// export default App;
