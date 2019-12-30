import * as React from "react";
// import { connect } from "react";
import { addUser, addArticle } from "./../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
    const state = useSelector(state => state);
    console.log('state: ', state);
    const users = useSelector(state => state.users);
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addUser())}> Add User </button>
      {users.map(user =>  <p key={user.id}> {user.name} </p>)}
      <hr />
      <button onClick={() => dispatch(addArticle())}> Add Article </button>
      {articles.map(article =>  <p key={article.id}> {article.name} </p>)}
    </div>
  );
};
export default App;