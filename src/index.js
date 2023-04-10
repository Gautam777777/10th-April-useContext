import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import A from './Pages/A';

export const MyContext = createContext()

let info = {
  name:"Gautam",
  surname:"Sharma",
  mobno:"0000000000"
}

console.log("info --->",info.name)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContext.Provider value={info}>
      <A />
    </MyContext.Provider>
    
  </React.StrictMode>
);
