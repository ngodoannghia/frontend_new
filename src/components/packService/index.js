import React from "react";
import { withRouter } from "react-router";


function PackService() {
    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Dashboard</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">eCommerce</li>
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
                <div className="col-12 col-xl-4">
                    <div className="card border-top border-4 border-primary">
                        <div className="card-body p-4">
                            <div className="px-2 py-1 fw-medium bg-primary bg-opacity-10 text-primary text-uppercase w-25 text-center rounded">NORMAL</div>
                            <div className="my-4">
                                <h3 className="mb-2">Normal Package 2024</h3>
                                <p className="mb-0">Cho người mới bắt đầu</p>
                            </div>
                            <div className="pricing-content d-flex flex-column gap-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Chất lượng</p>
                                    <p className="mb-0 fw-medium fs-6">128 kps</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Số lượng nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Download nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">không</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Upload nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Không</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Support</p>
                                    <p className="mb-0 fw-medium fs-6">Email</p>
                                </div>
                            </div>
                            <div className="price-tag d-flex align-items-center justify-content-center gap-2 my-5">
                                <h5 className="mb-0 align-self-end text-primary">$</h5>
                                <h1 className="mb-0 lh-1 price-amount text-primary">499</h1>
                                <h5 className="mb-0 align-self-end text-primary">/month</h5>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-lg btn-primary">Bắt đầu</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="card border-top border-4 border-success">
                        <div className="card-body p-4">
                            <div className="px-2 py-1 fw-medium bg-success bg-opacity-10 text-success text-uppercase w-25 text-center rounded">VIP</div>
                            <div className="my-4">
                                <h3 className="mb-2">Vip Package 2024</h3>
                                <p className="mb-0">Cho người mới bắt đầu</p>
                            </div>
                            <div className="pricing-content d-flex flex-column gap-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Chất lượng</p>
                                    <p className="mb-0 fw-medium fs-6">Up to 256kps</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Số lượng nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Download nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Upload nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Support</p>
                                    <p className="mb-0 fw-medium fs-6">Email</p>
                                </div>
                            </div>
                            <div className="price-tag d-flex align-items-center justify-content-center gap-2 my-5">
                                <h5 className="mb-0 align-self-end text-success">$</h5>
                                <h1 className="mb-0 lh-1 price-amount text-success">999</h1>
                                <h5 className="mb-0 align-self-end text-success">/month</h5>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-lg btn-success">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="card border-top border-4 border-danger">
                        <div className="card-body p-4">
                            <div className="px-2 py-1 fw-medium bg-danger bg-opacity-10 text-danger text-uppercase w-25 text-center rounded">SUPER_VIP</div>
                            <div className="my-4">
                                <h3 className="mb-2">Super Vip Package 2024</h3>
                                <p className="mb-0">Cho người mới bắt đầu</p>
                            </div>
                            <div className="pricing-content d-flex flex-column gap-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Chất lượng</p>
                                    <p className="mb-0 fw-medium fs-6">Up to 312kps</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Số lượng nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Không giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Download nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Không giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Upload nhạc</p>
                                    <p className="mb-0 fw-medium fs-6">Giới hạn</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-6">Support</p>
                                    <p className="mb-0 fw-medium fs-6">Email</p>
                                </div>
                            </div>
                            <div className="price-tag d-flex align-items-center justify-content-center gap-2 my-5">
                                <h5 className="mb-0 align-self-end text-danger">$</h5>
                                <h1 className="mb-0 lh-1 price-amount text-danger">799</h1>
                                <h5 className="mb-0 align-self-end text-danger">/month</h5>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-lg btn-danger">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default withRouter(PackService);