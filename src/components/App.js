import * as React from "react";
import { getDownload } from "./../redux/actions/downloadAction";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useEffect } from "react";
// import Login from './Login';
import { Table } from "antd";
import "antd/dist/antd.css";
import { Spin } from "antd";

const { Column } = Table;

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
    dispatch(getDownload());
  }, []);

  return (
    <>
      <h1>Total downloads : {countTotalDownload(downloads)}</h1>
      {downloads.length && (
        <Table dataSource={downloads}>
          <Column title="Total per day" dataIndex="downloads" key="downloads" />
          <Column title="Day" dataIndex="day" key="day" />
        </Table>
      )}
      {!downloads.length && <Spin />}
    </>
  );
};

export default App;
