
import React from 'react';
import { Redirect} from "react-router";
import Dashboard from './dashboard';
import PackService from './packService';
import UploadMusic from './music/upload';
import IndexMusic  from './music';
import Page404 from './page/page404';

import * as ApiService from "../services/ApiService"
import {baseurl} from "./config"

function Logout(){
    ApiService.logoutAdmin()
    window.location.reload()
    return <Redirect to="/login" />
}

const routers = [
    {
        id:1,
        path: baseurl + "/",
        component: Dashboard,
        markEnd: 0
    },
    {
        id:2,
        path: baseurl + "/pack",
        component: PackService,
        markEnd: 0
    },
    {
        id:3,
        path: baseurl + "/music",
        component: IndexMusic,
        markEnd: 0
    },
    {
        id:4,
        path: baseurl + "/music/upload",
        component: UploadMusic,
        markEnd: 0
    },
    {
        id: 100,
        path:  baseurl + "/logout",
        component: Logout,
        markEnd: 0
    },
    {
        id: 1000,
        path: "/markexist",
        component:  Page404,
        markEnd: 1
    }
]

export default routers;