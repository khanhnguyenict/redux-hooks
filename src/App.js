import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';


function App(){
  const counter = useSelector(state =>state)
  const dispatch = useDispatch();

  return(
    <>
    <p>
    hihi :   {counter.num}
    </p>
    <button onClick={()=>dispatch({
      type :'INCREMENT',
      step:1
    })}>INCREMENT</button>
    <button onClick={()=> dispatch(
      {
        type: 'DECREMENT',
        step: 1
      }
    )}>
      DECREMENT
    </button>
    </>
  )

}

export default App;