import React from 'react';
import { Redirect } from "react-router";
import * as ApiService from "../services/ApiService"
import Sidebar2 from './layout/sidebar2';
import Aside from './layout/aside';
import Customize from './layout/customize';
import Header from './layout/header';
import Sidebar from './layout/sidebar1';
import routers from "./Router";
import Cart from './layout/cart';

function App() {

  let isAuthen = ApiService.isAuthen()

  return (
    isAuthen ?
    <>
      <Header />
      <Aside />
      <main className="main-wrapper">
        {
          routers.map((m) => {
            let Component = m.component;
            return <Component exact path={m.path}></Component>
          })
        }
      </main>
      <Cart/>
      <Sidebar2 />
      <Sidebar />
      <button className="btn btn-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop">
        <i className="material-icons-outlined">tune</i>Customize
      </button>
      <Customize />
    </> :<Redirect to="/login" />
  );
}

export default App;
