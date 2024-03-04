
import React from 'react';
import { Redirect} from "react-router";
import Dashboard from './dashboard';

import * as ApiService from "../services/ApiService"
import {baseurl} from "./config"

function Logout(){
    ApiService.logoutAdmin()
    window.location.reload()
    return <Redirect to="/login" />
}

const routers = [
    {
        path: baseurl + "/",
        component: Dashboard
    },
    // {
    //     path:  baseurl + "/logout",
    //     component: Logout
    // }
]

export default routers;