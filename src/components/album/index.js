import React, {useEffect, useState} from "react";
import { trackPromise } from 'react-promise-tracker';
import { withRouter } from "react-router";
import {apiGetAllAlbum, displayDateTime} from  "../../services/ApiService"

function IndexAlbum(){
    var [datasource,setDatasource] = useState([])

    useEffect(()=>{

        trackPromise(apiGetAllAlbum().then((data)=>{
          setDatasource(data);
           
        }),"loading")
    },[])   

    function renderItem(m, index){
        return (
            <tr key={"item_" + (index + 1)}>
                <td>{m.album_id}</td>
                <td>{m.name}</td>
                <td>{m.category !== null ? m.category.name : "Default"}</td>
                <td>{m.country !== null ? m.country.name : "Default"}</td>
                <td>{displayDateTime(m.creat_at)}</td>
                <td>Edit|Delete</td>
            </tr>
        )
    }

    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Components</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Data Table</li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">Settings</button>
                        <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="javascript:;">Action</a>
                            <a className="dropdown-item" href="javascript:;">Another action</a>
                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                            <div className="dropdown-divider">
                        </div>	
                        <a className="dropdown-item" href="javascript:;">Separated link</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="example2" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Country</th>
                                    <th>Create date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datasource.map((m,index)=>renderItem(m,index))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Country</th>
                                    <th>Create date</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(IndexAlbum);