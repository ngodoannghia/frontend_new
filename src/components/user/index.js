import React, {useState, useEffect} from "react";
import { withRouter } from "react-router";
import { apiGetPageAllUser, displayDateTime } from "../../services/ApiService"
import { trackPromise } from 'react-promise-tracker';


function IndexUser(){
    var [datasource,setDatasource] = useState([]);
    var [pagging,setPagging] =  useState([1]);

    const [filterOption,setExFilterOption] = useState({
        limit:20,
        page:1, 
        status:-1,
        totalItem: 0
    }) 

    useEffect(()=>{

        trackPromise(apiGetPageAllUser({...filterOption} ).then((data)=>{
          setDatasource(data.content);
          var totalPage = data["totalPages"];
          var pages = [];
          for (var i =1 ;i <= totalPage;i ++){
            pages.push(i);
          }
          setPagging(pages);
          setExFilterOption({...filterOption,totalItem:data["totalElements"]});
        }),"loading")
    
    },[])

    function setFilterOption(obj){
        if (obj.page == filterOption.page){
          obj.page = 1
        }
        setExFilterOption(obj);
        trackPromise(apiGetPageAllUser(obj).then((data)=>{
              setDatasource(data.content);
              var totalPage = data["totalPages"];
              var pages = [1];
              for (var i =2 ;i <= totalPage;i ++){
                pages.push(i);
              }
              setPagging(pages);
              setExFilterOption({...obj,totalItem:data["totalElements"]});
        }),"loading")
    }
    function renderItem(m,index){
        return (
            <tr>
                <td>
                    <input className="form-check-input" type="checkbox"/>
                </td>
                <td>
                    <a className="d-flex align-items-center gap-3" href="#">
                    <div className="customer-pic">
                        <img src="https://placehold.co/110x110" className="rounded-circle" width="40" height="40" alt=""/>
                    </div>
                    <p className="mb-0 customer-name fw-bold">{m.username}</p>
                    </a>
                </td>
                <td>
                    <a href="#" className="font-text1">{m.email !== null ? m.email : "Chưa cập nhật"}</a>
                </td>
                <td>{m.phone !== null ? m.phone : "Chưa cập nhật"}</td>
                <td>{m.gender !== 0 ? 'Name' : "Nữ"}</td>
                <td>{m.role}</td>
                <td>{displayDateTime(m.create_at)}</td>
            </tr>  
        )
    }
    return (
        <div className="main-content">
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Components</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="#"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Customers</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary">Settings</button>
                        <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>	<a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-count d-flex align-items-center gap-3 gap-lg-4 mb-4 fw-bold flex-wrap font-text1">
                <a href="#"><span class="me-1">All</span><span class="text-secondary">(85472)</span></a>
                <a href="#"><span class="me-1">New</span><span class="text-secondary">(145)</span></a>
                <a href="#"><span class="me-1">Checkouts</span><span class="text-secondary">(89)</span></a>
                <a href="#"><span class="me-1">Locals</span><span class="text-secondary">(5872)</span></a>
                <a href="#"><span class="me-1">Subscribers</span><span class="text-secondary">(163)</span></a>
                <a href="#"><span class="me-1">Top Reviews</span><span class="text-secondary">(8)</span></a>
            </div>
            <div class="row g-3">
                <div className="col-auto">
                    <div className="position-relative">
                        <input className="form-control px-5" type="search" placeholder="Search Customer"/>
                        <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50 fs-5">search</span>
                    </div>
                </div>
                <div class="col-auto flex-grow-1 overflow-auto">
                    <div class="btn-group position-static">
                    <div class="btn-group position-static">
                        <button type="button" class="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="btn-group position-static">
                        <button type="button" class="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
                        Source
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div class="btn-group position-static">
                        <button type="button" class="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
                        More Filters
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    </div>  
                </div>
                <div class="col-auto">
                    <div class="d-flex align-items-center gap-2 justify-content-lg-end">
                    <button class="btn btn-filter px-4"><i class="bi bi-box-arrow-right me-2"></i>Export</button>
                    <button class="btn btn-primary px-4"><i class="bi bi-plus-lg me-2"></i>Add Customers</button>
                    </div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-body">
                    <div className="customer-table">
                        <div className="table-responsive white-space-nowrap">
                            <table className="table align-middle">
                                <thead className="table-light">     
                                    <tr>
                                    <th>
                                        <input className="form-check-input" type="checkbox"/>
                                    </th>
                                    <th>Customers</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Role</th>
                                    <th>Create Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        datasource.map((m,index)=>renderItem(m,index))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default withRouter(IndexUser)