import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import { apiAddCategory } from "../../services/ApiService"



function AddCategory(props) {
    var [name, setName] = useState({})
    var [description, setDescription] = useState({})

    const formData = new FormData()

    function handleAdd(){
        formData.append('name', name)
        formData.append('description', description)
        
        try{
            apiAddCategory(formData).then((data) => {
                window.showAlert("Tạo category thành công !")
                props.history.push('/category')
            }).catch(e => {
                window.showAlert("Tạo category thất bại")
                console.log(e)
            })
        }
        catch{
            window.showAlert("Lỗi xảy ra!")
        }
    }

    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Components</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="#"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Starter Page</li>
                        </ol>
                    </nav>
                </div>
                <div className="ms-auto">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">Settings</button>
                        <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	
                            <a className="dropdown-item" href="#">Edit</a>
                            <a className="dropdown-item" href="#">Delete</a>
                            <a className="dropdown-item" href="#">Other</a>
                            <div className="dropdown-divider"></div>	<a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-4">
                                <h5 className="mb-3">Category Name</h5>
                                <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="write title here...." />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Category Description</h5>
                                <textarea onChange={(e)=>setDescription(e.target.value)}  className="form-control" cols="4" rows="6" placeholder="write a description here.."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="d-grid">
                                        <button onClick={handleAdd} type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default withRouter(AddCategory);