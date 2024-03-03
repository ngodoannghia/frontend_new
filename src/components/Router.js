
import React from 'react';
import { Redirect} from "react-router-dom";
import Dashboard from './dashboard';

import * as ApiService from "../services/ApiService"
import {baseurl} from "./config"

function Logout(){
    ApiService.clearData()
    window.location.reload()
    return <Redirect to="/login" />
}

const routers = [
    {
        path: baseurl+"/",
        component: Dashboard
    }
]


export default routers