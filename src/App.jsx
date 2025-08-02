// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// import Button from "./Button";
// import useCount from "./store";

// function App() {
//   const [count, setCount] = useCount();

//   return (
//     <div className="App">
//       <h1>Remote Application</h1>
//       <Button />
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import useCount from "./store";
import "./App.css";
import { useEffect,useState } from 'react';

const App = () => {
  const [Item, Setitem] = useCount();
  const [total, setTotal] = useState(0)
  const [itemCount, setitemCount] = useState(0)
  useEffect(() => {
    const total = Item.reduce((acc, item)=> {
    
      return acc + (item.price * item.Quntity);
    },0)
    setTotal(total);
  }, [Item])
  

 
  return (
    <div className="remoteApp w-[100%] h-[100%] px-5 py-5">
        <div className='my-5 heading'>
      <h1 className='text-center  font-bold'>Remote</h1>
      </div>
      <div className='my-5 heading'>
      <h1 className='text-center  font-bold'>Summary</h1>
      </div>
      <div className='w-[100%] py-5 itemsInfo'>
        <h1>itme {Item.reduce((acc, current)=> {acc + current.Quntity},0)}</h1>
        <p>$ {total}</p>
      </div>
      <div className='selectbox'>
        <select>
          {Item.map((item, index) => (
            <option key={index} value={item.id}>
              {item.title} - ${item.price} x {item.Quntity}
            </option>
          ))}
        </select>
      </div>
      <div className='price'>
        <h1>Total Price</h1>
        <p>$ {total}</p>
      </div>
      <div>
        <button>Check out</button>
      </div>
    </div>
  )
}

export default App