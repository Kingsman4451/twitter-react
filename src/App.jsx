import React, { useEffect, useState } from "react";
import URL from "./API/URL";
import context from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import LeftSidebar from "./components/Left-sidebar/Left_sidebar/LeftSidebar";
import ProfileMain from "./components/Profile/Profile-main/ProfileMain";
import RightMain from "./components/Right-sidebar/Right-main/RightMain";
import HomeMain from "./components/Home/Home-main/HomeMain";

const App = () => {
  const cont = context.context;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(URL.URL).then((res) => setUsers(res.data.data));
  };

  return (
    <>
      <div className="container-xxl container-fluid">
        <div className="twitter-wrapper row position-relative">
          <cont.Provider value={{ users }}>
            <BrowserRouter>
              <LeftSidebar />
              <Routes>
                <Route path="/" element={<HomeMain/>}/>
                <Route path="/profile" element={<ProfileMain />}/>
              </Routes>
              <RightMain />
            </BrowserRouter>
          </cont.Provider>
        </div>
      </div>
    </>
  );
};

export default App;
