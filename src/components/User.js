import * as React from "react";
import { useRef, useReducer } from "react";

export default function User() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
          return [...state, {
              id : state.length,
              name : action.name
          }]
        case 'remove':
            const data = state.filter(item => item.id !== action.id);
            return data;
      default:

        return state;
    }
  }, []);

  function handleSumit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }
  function removeItem(id) {
    // e.preventDefault();
    dispatch({
      type: "remove",
      id
    });
    inputRef.current.value = "";
  }
  return (
    <>
   <h3>User Page</h3>

      <form onSubmit={handleSumit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map(item => (
            <div key = {item.id}>
          <li>{item.name}</li>
          <button  onClick={()=> removeItem(item.id)}> Remove item</button>
          </div>
        ))}
      </ul>
    </>
  );
}
