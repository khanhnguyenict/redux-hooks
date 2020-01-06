import * as React from "react";
// import { connect } from "react";
import {
  addUser,
  subUser,
} from "./../redux/actions/actions";
import {
  getDownload
} from './../redux/actions/downloadAction';
import { useSelector, useDispatch } from "react-redux";
import {
  useState,
  useEffect
} from 'react';

const App = () => {
  const state = useSelector(state => state);
console.log('state: ', state);
    const users = useSelector(state => state.users);
    // const download = useSelector(state => state.download);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };
  const summitForm = () => {
    dispatch(addUser(inputValue));
    setInputValue('');
  }
  useEffect(() => {
    console.log('render');
    dispatch(getDownload())
  }, []);
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder='enter your user name'
        onChange={onChangeHandler}
        value={inputValue}
      />
      <button onClick={summitForm}> Add User </button>
      {users.map(user => <div key={user.id}>
        console.log('hihi');

        <p> User Name : {user.name}</p>
        <button onClick={() => dispatch(subUser(user.id))}>  Remove User</button>
        </div>
      )}
    </div>
  );
};
export default App;