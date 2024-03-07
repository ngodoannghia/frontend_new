import React from 'react';
import { Redirect } from "react-router";
import { useLocation } from "react-router-dom"
import * as ApiService from "../services/ApiService"
import Sidebar2 from './layout/sidebar2';
import Aside from './layout/aside';
import Customize from './layout/customize';
import Header from './layout/header';
import Sidebar from './layout/sidebar1';
import routers from "./Router";
import Page404 from './page/page404';
import Cart from './layout/cart';
import { baseurl } from './config';

function App() {

  let isAuthen = ApiService.isAuthen()
  let count = 0
  const location = useLocation()

  return (
    isAuthen ?
      <div>
        <Header />
        <Aside />
        <main className="main-wrapper">
          {
            routers.map((m) => {
              if (baseurl + location.pathname === m.path){
                count += 1;
                let Component = m.component;
                return <Component key={m.id} exact path={m.path}></Component>
              }
              if (m.markEnd === 1 && count === 0){
                return <Page404></Page404>
              }
              return null;
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
      </div> : <Redirect to="/login" />
  );
}

export default App;
