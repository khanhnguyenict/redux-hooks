import React, { useState } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';


function App(){
  const num = useSelector(state =>state.num)
  const isloading = useSelector(state => state.isloading);
  const dispatch = useDispatch();

  return(
    <>
    <p>
    hihi :   {num}
    </p>
    <h4 style={isloading ? {display:'block'} : 'none'}>is loading</h4>
    <button onClick={()=>dispatch({
      type :'INCREMENT'
    })}>INCREMENT</button>
    <button onClick={()=> dispatch(
      {
        type: 'DECREMENT'
      }
    )}>
      DECREMENT
    </button>
    </>
  )

}

export default App;