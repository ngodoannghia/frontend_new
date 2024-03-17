import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import { apiAddAlbum } from "../../services/ApiService"
import Select from 'react-select'


function AddAlbum(props) {
    var [name, setName] = useState({})
    var [description, setDescription] = useState({})
    var [countryId, setCountryId] = useState(1)
    var [singersId, setSingerId] = useState({})
    var [categorieId, setCategoryId] = useState(1)

    const formData = new FormData()

    const handleSelectChange = (selectedOptions) => {
        setSingerId(selectedOptions);
      };
    const options = [
        { value: '1', label: 'Mỹ Tâm' },
        { value: '2', label: 'Đức Phúc' },
    ]

    const handleAdd = (event) => {
        event.preventDefault();

        formData.append('name', name)
        formData.append('description', description)
        formData.append('country_id', countryId)
        formData.append('category_id', categorieId)

        singersId.forEach((singer, index) => {
            formData.append('singer_id', singer.value);
        });
        
        try{
            apiAddAlbum(formData).then((data) => {
                window.showAlert("Tạo album thanh công !")
                props.history.push('/album')
            }).catch(e => {
                window.showAlert("Tạo album nhạc thất bại")
                console.log(e)
            })
        }
        catch{
            window.showAlert("Có lỗi xảy ra!")
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
                                <h5 className="mb-3">Album Name</h5>
                                <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" placeholder="write title here...." />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Album Description</h5>
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
                                    <select onChange={(e)=>setCountryId(e.target.value)} className="form-select" id="Country">
                                        <option value="1">Nhạc Việt</option>
                                        <option value="2">Nhạc Âu Mỹ</option>
                                        <option value="3">Nhạc Hàn</option>
                                        <option value="4">Nhạc Hoa</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Category" className="form-label">Category</label>
                                    <select onChange={(e)=>setCategoryId(e.target.value)} className="form-select" id="Category">
                                        <option value="1">Trữ Tình & Bolero</option>
                                        <option value="2">Nhạc Thiếu Nhi</option>
                                        <option value="3">Nhạc Phim</option>
                                        <option value="4">Remix</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="multiple-select-field" className="form-label">Singer</label>
                                    <Select
                                        isMulti
                                        name="singer"
                                        options={options}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={handleSelectChange}
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
export default withRouter(AddAlbum);