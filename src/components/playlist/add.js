import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { apiAddPlaylist, apiGetAllCategory, apiGetAllCountry } from "../../services/ApiService"
import Select from 'react-select'



function AddPlaylist(props) {
    var [name, setName] = useState({})
    var [description, setDescription] = useState({})
    var [countryId, setCountryId] = useState(1)
    var [categorieId, setCategoryId] = useState(1)

    var [optionsCategory, setOptionCategory] = useState({})
    var [optionsCountry, setOptionCountry] = useState({})

    const handleCategoryChange = (selectedOptions) => {
        setCategoryId(selectedOptions.value);
        // Do something with the selected value
    };
    const handleCountryChange = (selectedOptions) => {
        setCountryId(selectedOptions.value);
        // Do something with the selected value
    };

    useEffect(()=>{
        var tmpCategory = []
        var tmpCountry = []
        var tmpSinger = []

        apiGetAllCategory().then((data) => {
            data.forEach(item => {
                tmpCategory.push({value: item.category_id, label: item.name})
            })
        })
        apiGetAllCountry().then((data) => {
            data.forEach(item => {
                tmpCountry.push({value: item.country_id, label: item.name})
            })
        })

        setOptionCategory(tmpCategory)
        setOptionCountry(tmpCountry)

    }, [])
    const formData = new FormData()

    function handleAdd(){
        formData.append('name', name)
        formData.append('description', description)
        formData.append('country_id', countryId)
        formData.append('category_id', categorieId)
        
        try{
            apiAddPlaylist(formData).then((data) => {
                window.showAlert("Tạo playlist thành công !")
                props.history.push('/playlist')
            }).catch(e => {
                window.showAlert("Tạo playlist thất bại")
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
                                <h5 className="mb-3">Playlist Name</h5>
                                <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="write title here...." />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Playlist Description</h5>
                                <textarea onChange={(e)=>setDescription(e.target.value)}  className="form-control" cols="4" rows="6" placeholder="write a description here.."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-3">
                                <button type="button" className="btn btn-outline-danger flex-fill"><i className="bi bi-x-circle me-2"></i>Discard</button >
                                <button type="button" className="btn btn-outline-success flex-fill"><i className="bi bi-cloud-download me-2"></i>Save Draft</button>
                                <button type="button" className="btn btn-outline-primary flex-fill"><i className="bi bi-send me-2"></i>Publish</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-3">Organize</h5>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="Country" className="form-label">Country</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={optionsCountry[0]}
                                        name="color"
                                        options={optionsCountry}
                                        onChange={handleCountryChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Category" className="form-label">Category</label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={optionsCategory[0]}
                                        name="color"
                                        options={optionsCategory}
                                        onChange={handleCategoryChange}
                                    />
                                </div>
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
export default withRouter(AddPlaylist);