import * as React from "react";
import { getDownload } from "./../redux/actions/downloadAction";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useEffect } from "react";
import Login from './Login'

const App = () => {
  // use dispatch
  const dispatch = useDispatch();
  const { downloads = [] } = useSelector(
    state => ({
      users: state.users,
      downloads: state.downloadLibraryInfo.data.downloads
    }),
    shallowEqual
  );
  const countTotalDownload = (downloads = []) =>
    downloads.reduce((total, currentItem) => total + currentItem.downloads, 0);

  useEffect(() => {
    console.log('render!!!');
    dispatch(getDownload());
 
  }, []);

  return (
    <div>
      <p> Total downloads : {countTotalDownload(downloads)}</p>
      {/* {downloads.map(item => (
        <>
          <h1 key={item.day}> Download : {item.downloads} --- 
           Day : {item.day}
           </h1>
        </>
      ))} */}
      <Login/>
    </div>
  );
};
export default App;
