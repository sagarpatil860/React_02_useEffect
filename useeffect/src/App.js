
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(0);
 useEffect(()=>{setTimeout(()=>setcount(count+1),500); });
  return (
  <><h1>{count}</h1>
  <button type="button" onClick={()=>setcount(count+1) }>Click Me!</button>
  </>
  );
  
}

export default memo(App);
