
import React, { useState } from 'react';
import * as ApiService from "../../services/ApiService"
import { usePromiseTracker } from "react-promise-tracker";
import { baseurl } from "../config"

function Sidebar() {
    const { promiseInProgress } = usePromiseTracker({ area: "authen" });
    let info = ApiService.getUsetInfo()

    return (
        <div className="offcanvas offcanvas-start w-260" data-bs-scroll="true" tabIndex="-1" id="offcanvasUserDetails">
            <div className="offcanvas-body">
                <div className="user-wrapper">
                    <div className="text-center p-3 bg-light rounded">
                        <img src="https://placehold.co/110x110" className="rounded-circle p-1 shadow mb-3" width="120"
                            height="120" alt="" />
                        <h5 className="user-name mb-0 fw-bold">{info.username}</h5>
                        <p className="mb-0">Administrator</p>
                    </div>
                    <div className="list-group list-group-flush mt-3 profil-menu fw-bold">
                        <a href="#"
                            className="list-group-item list-group-item-action d-flex align-items-center gap-2 border-top"><i
                                className="material-icons-outlined">person_outline</i>Profile</a>
                        <a href="#"
                            className="list-group-item list-group-item-action d-flex align-items-center gap-2"><i
                                className="material-icons-outlined">local_bar</i>Setting</a>
                        <a href="#"
                            className="list-group-item list-group-item-action d-flex align-items-center gap-2"><i
                                className="material-icons-outlined">dashboard</i>Dashboard</a>
                        <a href="#"
                            className="list-group-item list-group-item-action d-flex align-items-center gap-2"><i
                                className="material-icons-outlined">account_balance</i>Earning</a>
                        <a href="#"
                            className="list-group-item list-group-item-action d-flex align-items-center gap-2"><i
                                className="material-icons-outlined">cloud_download</i>Downloads</a>
                        <a href={baseurl + "/logout"} className="list-group-item list-group-item-action d-flex align-items-center gap-2 border-bottom">
                            <i className="material-icons-outlined">power_settings_new</i>Logout
                        </a>
                    </div>
                </div>

            </div>
            <div className="offcanvas-footer p-3 border-top">
                <div className="text-center">
                    <button type="button" className="btn d-flex align-items-center gap-2" data-bs-dismiss="offcanvas"><i
                        className="material-icons-outlined">close</i><span>Close Sidebar</span></button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;