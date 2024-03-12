import React from "react";
import { withRouter } from "react-router-dom";



function UploadMusic() {

    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Components</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
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
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="javascript:;">Action</a>
                            <a className="dropdown-item" href="javascript:;">Another action</a>
                            <a className="dropdown-item" href="javascript:;">Something else here</a>
                            <div className="dropdown-divider"></div>	<a className="dropdown-item" href="javascript:;">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-4">
                                <h5 className="mb-3">Product Title</h5>
                                <input type="text" className="form-control" placeholder="write title here...." />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Product Description</h5>
                                <textarea className="form-control" cols="4" rows="6" placeholder="write a description here.."></textarea>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Lyris</h5>
                                <input id="fancy-file-upload-lyris" type="file" name="files" accept=".text, .doc, .docx, .txt"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Music Demo</h5>
                                <input id="fancy-file-upload-demo" type="file" name="files" accept=".mp3, .wav, .wma, .flac, .aac, .ogg"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Music Offical</h5>
                                <input id="fancy-file-upload-offical" type="file" name="files" accept=".mp3, .wav, .wma, .flac, .aac, .ogg"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Inventory</h5>

                                <div className="row g-3">
                                    <div className="col-12 col-lg-3">
                                        <div className="nav flex-column nav-pills border rounded vertical-pills overflow-hidden">
                                            <button className="nav-link px-4 rounded-0" data-bs-toggle="pill" data-bs-target="#Pricing" type="button"><i className="bi bi-tag-fill me-2"></i>Pricing</button>
                                            <button className="nav-link px-4 rounded-0" data-bs-toggle="pill" data-bs-target="#Restock" type="button"><i className="bi bi-box-seam-fill me-2"></i>Restock</button>
                                            <button className="nav-link active px-4 rounded-0" data-bs-toggle="pill" data-bs-target="#Shipping" type="button"><i className="bi bi-truck-front-fill me-2"></i>Shipping</button>
                                            <button className="nav-link px-4 rounded-0" data-bs-toggle="pill" data-bs-target="#GlobalDelivery" type="button"><i className="bi bi-globe me-2"></i>Global Delivery</button>
                                            <button className="nav-link px-4 rounded-0" data-bs-toggle="pill" data-bs-target="#Attributes" type="button"><i className="bi bi-hdd-rack-fill me-2"></i>Attributes</button>
                                            <button className="nav-link px-4 rounded-0" data-bs-toggle="pill" data-bs-target="#Advanced" type="button"><i className="bi bi-handbag-fill me-2"></i>Advanced</button>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-9">
                                        <div className="tab-content">
                                            <div className="tab-pane fade" id="Pricing">
                                                <div className="row g-3">
                                                    <div className="col-12 col-lg-6">
                                                        <h6 className="mb-2">Regular price</h6>
                                                        <input className="form-control" type="text" placeholder="$$$" />
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <h6 className="mb-2">Sale price</h6>
                                                        <input className="form-control" type="text" placeholder="$$$" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Restock">
                                                <h6 className="mb-3">Add to Stock</h6>
                                                <div className="row g-3">
                                                    <div className="col-sm-7">
                                                        <input className="form-control" type="number" placeholder="Quantity" />
                                                    </div>
                                                    <div className="col-sm">
                                                        <button className="btn btn-outline-primary"><i className="bi bi-check2 me-2"></i>Confirm</button>
                                                    </div>
                                                </div>
                                                <table className="mt-3">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '200px' }}></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-1000 py-1">Product in stock now:</td>
                                                            <td className="text-700 fw-semi-bold py-1">$2,059<button className="btn p-0 ms-2" type="button"><i className="bi bi-arrow-clockwise"></i></button></td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-1000 py-1">Product in transit:</td>
                                                            <td className="text-700 fw-semi-bold py-1">3000</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-1000 py-1">Last time restocked:</td>
                                                            <td className="text-700 fw-semi-bold py-1">25th March, 2020</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-1000 py-1">Total stock over lifetime:</td>
                                                            <td className="text-700 fw-semi-bold py-1">50,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="tab-pane fade show active" id="Shipping">
                                                <div className="d-flex flex-column h-100">
                                                    <h6 className="mb-3">Shipping Type</h6>
                                                    <div className="flex-1">
                                                        <div className="mb-4">
                                                            <div className="form-check mb-1">
                                                                <input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledBySeller" />
                                                                <label className="form-check-label fw-bold" htmlFor="fullfilledBySeller">Fullfilled by Seller</label></div>
                                                            <div className="ps-4">
                                                                <p className="mb-0">You’ll be responsible for product delivery. <br />Any damage or delay during shipping may cost you a Damage fee.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <div className="form-check mb-1">
                                                                <input className="form-check-input" type="radio" name="shippingRadio" id="fullfilledByPhoenix" checked="checked" />
                                                                <label className="form-check-label fw-bold d-flex align-items-center" htmlFor="fullfilledByPhoenix">Fullfilled by Admin <span className="badge bg-warning text-dark ms-2">Recommended</span></label></div>
                                                            <div className="ps-4">
                                                                <p className="mb-0">Your product, Our responsibility.<br />For a measly fee, we will handle the delivery process for you.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="fs--1 fw-semi-bold mb-0">See our <a className="fw-bold" href="#!">Delivery terms and conditions </a>for details.</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="GlobalDelivery">
                                                <div className="d-flex flex-column h-100">
                                                    <h6 className="mb-3">Global Delivery</h6>
                                                    <div className="flex-1">
                                                        <div className="mb-4">
                                                            <div className="form-check mb-1">
                                                                <input className="form-check-input" type="radio" name="shippingRadio" id="Worldwidedelivery" />
                                                                <label className="form-check-label fw-bold" htmlFor="Worldwidedelivery">Worldwide delivery</label>
                                                            </div>
                                                            <div className="ps-4">
                                                                <p className="mb-0">Only available with Shipping method: <a href="#!">Fullfilled by Admin</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <div className="form-check mb-1">
                                                                <input className="form-check-input" type="radio" name="shippingRadio" id="SelectedCountries" checked="checked" />
                                                                <label className="form-check-label fw-bold d-flex align-items-center" htmlFor="SelectedCountries">Selected Countries</label>
                                                            </div>
                                                            <div className="ps-4">
                                                                <input className="form-control" type="text" placeholder="Type Country name" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-0">
                                                            <div className="form-check mb-1">
                                                                <input className="form-check-input" type="radio" name="shippingRadio" id="Localdelivery" />
                                                                <label className="form-check-label fw-bold" htmlFor="Localdelivery">Local delivery</label>
                                                            </div>
                                                            <div className="ps-4">
                                                                <p className="mb-0">Only available with Shipping method: <a href="#!">Fullfilled by Admin</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Attributes">
                                                <h6 className="mb-3">Attributes</h6>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="fragileCheck" type="checkbox" />
                                                    <label className="form-check-label text-900 fs-0" htmlFor="fragileCheck">Fragile Product</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="biodegradableCheck" type="checkbox" />
                                                    <label className="form-check-label text-900 fs-0" htmlFor="biodegradableCheck">Biodegradable</label>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="form-check"><input className="form-check-input" id="frozenCheck" type="checkbox" checked="checked" />
                                                        <label className="form-check-label text-900 fs-0" htmlFor="frozenCheck">Frozen Product</label>
                                                        <input className="form-control" type="text" placeholder="Max. allowed Temperature" style={{ maxWidth: '350px' }} />
                                                    </div>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="productCheck" type="checkbox" checked="checked" />
                                                    <label className="form-check-label text-900 fs-0" htmlFor="productCheck">Expiry Date of Product</label>
                                                    <input className="form-control" id="inventory" type="date" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="Advanced">
                                                <h6 className="mb-3">Advanced</h6>
                                                <div className="row g-3">
                                                    <div className="col-12 col-lg-6">
                                                        <label className="mb-2">Product ID Type</label>
                                                        <select className="form-select">
                                                            <option selected="selected">ISBN</option>
                                                            <option value="1">UPC</option>
                                                            <option value="2">EAN</option>
                                                            <option value="3">JAN</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <label className="mb-2">Product ID</label>
                                                        <input className="form-control" type="text" placeholder="ISBN Number" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <label htmlFor="AddCategory" className="form-label">Category</label>
                                    <select className="form-select" id="AddCategory">
                                        <option value="0">Topwear</option>
                                        <option value="1">Bottomwear</option>
                                        <option value="2">Casual Tshirt</option>
                                        <option value="3">Electronic</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Collection" className="form-label">Collection</label>
                                    <input type="text" className="form-control" id="Collection" placeholder="Collection" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Tags" className="form-label">Tags</label>
                                    <input type="text" className="form-control" id="Tags" placeholder="Tags" />
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center gap-2">
                                        <a href="javascript:;" className="btn btn-sm btn-light border shadow-sm">Woman <i className="bi bi-x"></i></a>
                                        <a href="javascript:;" className="btn btn-sm btn-light border shadow-sm">Fashion <i className="bi bi-x"></i></a>
                                        <a href="javascript:;" className="btn btn-sm btn-light border shadow-sm">Furniture <i className="bi bi-x"></i></a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Vendor" className="form-label">Vendor</label>
                                    <input type="text" className="form-control" id="Vendor" placeholder="Vendor" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="mb-3">Variants</h5>
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="Brand" className="form-label">Brand</label>
                                    <input type="text" className="form-control" id="Brand" placeholder="Brand" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="SKU" className="form-label">SKU</label>
                                    <input type="text" className="form-control" id="SKU" placeholder="SKU" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Color" className="form-label">Color</label>
                                    <input type="text" className="form-control" id="Color" placeholder="Color" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Size" className="form-label">Size</label>
                                    <input type="text" className="form-control" id="Size" placeholder="Size" />
                                </div>
                                <div className="col-12">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary">Add Variants</button>
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
export default withRouter(UploadMusic);