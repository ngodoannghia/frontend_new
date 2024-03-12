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
                                <h5 className="mb-3">Song Title</h5>
                                <input type="text" className="form-control" placeholder="write title here...." />
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Song Description</h5>
                                <textarea className="form-control" cols="4" rows="6" placeholder="write a description here.."></textarea>
                            </div>
                            
                            <div className="mb-3">
                                <h5 className="mb-3">Upload Lyris</h5>
                                <input id="fancy-file-upload-lyris" type="file" name="files" accept=".text, .doc, .docx, .txt"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Song Demo</h5>
                                <input id="fancy-file-upload-demo" type="file" name="files" accept=".mp3, .wav, .wma, .flac, .aac, .ogg"/>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">Upload Song Offical</h5>
                                <input id="fancy-file-upload-offical" type="file" name="files" accept=".mp3, .wav, .wma, .flac, .aac, .ogg"/>
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
                                    <label htmlFor="AddPackage" className="form-label">Package</label>
                                    <select className="form-select" id="AddPackage">
                                        <option value="Normal">Normal</option>
                                        <option value="Vip">Vip</option>
                                        <option value="Super_Vip">Super Vip</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Country" className="form-label">Country</label>
                                    <input type="text" className="form-control" id="Country" placeholder="Country" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Category" className="form-label">Category</label>
                                    <input type="text" className="form-control" id="Category" placeholder="Category" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Album" className="form-label">Album</label>
                                    <input type="text" className="form-control" id="Album" placeholder="Album" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="Playlist" className="form-label">Playlist</label>
                                    <input type="text" className="form-control" id="Playlist" placeholder="Playlist" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="multiple-select-field" className="form-label">Singer</label>
                                    <select className="form-select" id="multiple-select-field" data-placeholder="Select singers" multiple>
										<option>A</option>
										<option>B</option>
										<option>C</option>
										<option>D</option>
										<option>E</option>
									</select>
								</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary">Submit</button>
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