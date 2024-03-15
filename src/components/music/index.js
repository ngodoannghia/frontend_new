import React, {useEffect, useState} from "react";
import { baseurl } from "../config";
import { getPageMusicAll, displayDateTime } from "../../services/ApiService"
import { trackPromise } from 'react-promise-tracker';
import { withRouter } from "react-router";

function IndexMusic(props) {
    var [datasource,setDatasource] = useState([]);
    var [pagging,setPagging] =  useState([1]);

    const [filterOption,setExFilterOption] = useState({
        limit:20,
        page:1, 
        status:-1,
        totalItem: 0
    }) 

    useEffect(()=>{

        trackPromise(getPageMusicAll({...filterOption} ).then((data)=>{
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
        trackPromise(getPageMusicAll(obj).then((data)=>{
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
        <tr key={"item_"+(index+1)}>
            <td>
                <input className="form-check-input" type="checkbox"/>
            </td>
            <td>
                <div className="d-flex align-items-center gap-3">
                    <div className="product-box">
                        <img src="https://placehold.co/75x50" width="70" className="rounded-3" alt=""/>
                    </div>
                    <div className="product-info">
                        <a href="#" className="product-title">{m.title}</a>
                        <p className="mb-0 product-category">Category : {m.category !== null ? m.category.name : "Default"}</p>
                    </div>
                </div>
            </td>
            <td>{m.country !== null ? m.country.name : "Default" }</td>
            <td>{m.album !== null ? m.album.name : "Default"}</td>
            <td>{m.playlist !== null ? m.playlist.name : "Default"}</td>
            <td>
                <div className="product-tags">
                    {
                        m.singers.map(s => (
                            <a key={s.singer_id} href="#" className="btn-tags">{s.name}</a>
                        ))
                    }
                </div>
            </td>
            <td>
                <div className="product-rating">
                    <i className="bi bi-star-fill text-warning me-2"></i><span>{m.view !== null?m.view:0}</span>
                </div>
            </td>
            <td>
                <a href="#">{m.pack !== null ? m.pack.name : 'Normal'}</a>
            </td>
            <td>
                {displayDateTime(m.create_at)}
            </td>
            <td>
                <div className="dropdown">
                    <button className="btn btn-sm btn-filter dropdown-toggle dropdown-toggle-nocaret"
                        type="button" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Edit</a></li>
                        <li><a className="dropdown-item" href="#">Delete</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    )}

    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">eCommerce</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="#"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">Settings</button>
                        <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"> <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a className="dropdown-item"
                            href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div> <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-count d-flex align-items-center gap-3 gap-lg-4 mb-4 fw-medium flex-wrap font-text1">
                <a href="#"><span className="me-1">All</span><span className="text-secondary">(88754)</span></a>
                <a href="#"><span className="me-1">Published</span><span className="text-secondary">(56242)</span></a>
                <a href="#"><span className="me-1">Drafts</span><span className="text-secondary">(17)</span></a>
                <a href="#"><span className="me-1">On Discount</span><span className="text-secondary">(88754)</span></a>
            </div>

            <div className="row g-3">
                <div className="col-auto">
                    <div className="position-relative">
                        <input className="form-control px-5" type="search" placeholder="Search Products"/>
                        <span className="material-icons-outlined position-absolute ms-3 translate-middle-y start-0 top-50 fs-5">search</span>
                    </div>
                </div>
                <div className="col-auto flex-grow-1 overflow-auto">
                    <div className="btn-group position-static">
                        <div className="btn-group position-static">
                            <button type="button" className="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="btn-group position-static">
                            <button type="button" className="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
                                Country
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="btn-group position-static">
                            <button type="button" className="btn btn-filter dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
                                Package
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="d-flex align-items-center gap-2 justify-content-lg-end">
                        <button className="btn btn-filter px-4"><i className="bi bi-box-arrow-right me-2"></i>Export</button>
                        <a href={baseurl + '/music/upload'}><button className="btn btn-primary px-4"><i className="bi bi-plus-lg me-2"></i>Add Product</button></a>
                    </div>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <div className="product-table">
                        <div className="table-responsive white-space-nowrap">
                            <table className="table align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>
                                            <input className="form-check-input" type="checkbox"/>
                                        </th>
                                        <th>Song Name</th>
                                        <th>Country</th>
                                        <th>Album</th>
                                        <th>Playlist</th>
                                        <th>Singers</th>
                                        <th>Views</th>
                                        <th>Package</th>
                                        <th>Date</th>
                                        <th>Action</th>
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

export default withRouter(IndexMusic);