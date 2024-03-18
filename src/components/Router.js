
import React from 'react';
import { Redirect} from "react-router";
import Dashboard from './dashboard';
import PackService from './packService';
import UploadMusic from './music/upload';
import IndexMusic  from './music';
import Page404 from './page/page404';
import IndexAlbum from './album';
import IndexCategory from './category'
import IndexPlaylist from './playlist'
import IndexCountry from './country'
import AddPlaylist from './playlist/add'
import AddCategory from './category/add'
import AddCountry from './country/add'
import AddAlbum from './album/add'
import IndexUser from './user'

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
        id:5,
        path: baseurl + "/album",
        component: IndexAlbum,
        markEnd: 0
    },
    {
        id:6,
        path: baseurl + "/category",
        component: IndexCategory,
        markEnd: 0
    },
    {
        id:8,
        path: baseurl + "/category/add",
        component: AddCategory,
        markEnd: 0
    },
    {
        id:9,
        path: baseurl + "/playlist",
        component: IndexPlaylist,
        markEnd: 0
    },
    {
        id:10,
        path: baseurl + "/playlist/add",
        component: AddPlaylist,
        markEnd: 0
    },
    {
        id:11,
        path: baseurl + "/country",
        component: IndexCountry,
        markEnd: 0
    },
    {
        id:12,
        path: baseurl + "/country/add",
        component: AddCountry,
        markEnd: 0
    },
    {
        id:13,
        path: baseurl + "/album/add",
        component: AddAlbum,
        markEnd: 0
    },
    {
        id:14,
        path: baseurl + "/user",
        component: IndexUser,
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