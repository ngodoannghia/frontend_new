import React from "react";


function Dashboard() {

    return (
        <div className="main-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Dashboard</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item"><a href="#"><i className="bx bx-home-alt"></i></a>
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
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>	<a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xl-4">
                    <div className="card rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="">
                                    <h2 className="mb-0">$9,568</h2>
                                </div>
                                <div className="">
                                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-danger text-danger bg-opacity-10"><span className="material-icons-outlined fs-6">arrow_downward</span>8.6%</p>
                                </div>
                            </div>
                            <p className="mb-0">Average Weekly Sales</p>
                            <div id="chart1"></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-8">
                    <div className="card rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-around flex-wrap gap-4 p-4">
                                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                    <a href="#" className="mb-2 wh-48 bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="material-icons-outlined">shopping_cart</i>
                                    </a>
                                    <h3 className="mb-0">85,246</h3>
                                    <p className="mb-0">Orders</p>
                                </div>
                                <div className="vr"></div>
                                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                    <a href="#" className="mb-2 wh-48 bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="material-icons-outlined">print</i>
                                    </a>
                                    <h3 className="mb-0">$96,147</h3>
                                    <p className="mb-0">Income</p>
                                </div>
                                <div className="vr"></div>
                                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                    <a href="#" className="mb-2 wh-48 bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="material-icons-outlined">notifications</i>
                                    </a>
                                    <h3 className="mb-0">846</h3>
                                    <p className="mb-0">Notifications</p>
                                </div>
                                <div className="vr"></div>

                                <div className="d-flex flex-column align-items-center justify-content-center gap-2">
                                    <a href="#" className="mb-2 wh-48 bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="material-icons-outlined">payment</i>
                                    </a>
                                    <h3 className="mb-0">$84,472</h3>
                                    <p className="mb-0">Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-12 col-xl-5 col-xxl-4 d-flex">
                    <div className="card rounded-4 w-100 shadow-none bg-transparent">
                        <div className="card-body p-0">
                            <div className="row g-4">
                                <div className="col-12 col-xl-6 d-flex">
                                    <div className="card mb-0 rounded-4 w-100">
                                        <div className="card-body">
                                            <div className="d-flex align-items-start justify-content-between mb-3">
                                                <div className="">
                                                    <h4 className="mb-0">97.4K</h4>
                                                    <p className="mb-0">Total Users</p>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                                        data-bs-toggle="dropdown">
                                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="chart-container2">
                                                <div id="chart3"></div>
                                            </div>
                                            <div className="text-center">
                                                <p className="mb-0"><span className="text-success me-1">12.5%</span> from last month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 d-flex">
                                    <div className="card mb-0 rounded-4 w-100">
                                        <div className="card-body">
                                            <div className="d-flex align-items-start justify-content-between mb-1">
                                                <div className="">
                                                    <h4 className="mb-0">42.5K</h4>
                                                    <p className="mb-0">Active Users</p>
                                                </div>
                                                <div className="dropdown">
                                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                                        data-bs-toggle="dropdown">
                                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="chart-container2">
                                                <div id="chart2"></div>
                                            </div>
                                            <div className="text-center">
                                                <p className="mb-0">24K users increased from last month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-12">
                                    <div className="card rounded-4 mb-0">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center gap-3 mb-2">
                                                <div className="">
                                                    <h2 className="mb-0">$65,129</h2>
                                                </div>
                                                <div className="">
                                                    <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-success text-success bg-opacity-10"><span className="material-icons-outlined fs-6">arrow_upward</span>8.6%</p>
                                                </div>
                                            </div>
                                            <p className="mb-0">Sales This Year</p>
                                            <div className="mt-4">
                                                <div>
                                                    <p className="mb-2 d-flex align-items-center justify-content-between">285 left to Goal<span className="">{`78%`}</span></p>
                                                    <div className="progress w-100" style={{ height: '7px' }}>
                                                        <div className="progress-bar bg-primary" style={{ width: '65%' }}></div>
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
                <div className="col-12 col-xl-7 col-xxl-5 d-flex">
                    <div className="card w-100 rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-0 fw-bold">Sales & Views</h5>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="chart4"></div>
                            <div className="d-flex align-items-start justify-content-around bg-light p-3 rounded-4 mt-3">
                                <div className="">
                                    <p className="mb-1 fs-6 fw-bold">Monthly</p>
                                    <h2 className="mb-0">65,127</h2>
                                    <p className="mb-0"><span className="text-success me-2 fw-medium">16.5%</span><span>55.21 USD</span></p>
                                </div>
                                <div className="vr"></div>
                                <div className="">
                                    <p className="mb-1 fs-6 fw-bold">Yearly</p>
                                    <h2 className="mb-0">984,246</h2>
                                    <p className="mb-0"><span className="text-success me-2 fw-medium">24.9%</span><span>267.35 USD</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-12 col-xl-12 col-xxl-3 d-flex">
                    <div className="card w-100 rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-0 fw-bold">Campaign</h5>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-between gap-4">
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/17.png" width="32" alt="" />
                                        <p className="mb-0">Facebook</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">55%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#0d6efd", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/18.png" width="32" alt="" />
                                        <p className="mb-0">LinkedIn</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">67%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#fc185a", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/19.png" width="32" alt="" />
                                        <p className="mb-0">Instagram</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">78%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#02c27a", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/20.png" width="32" alt="" />
                                        <p className="mb-0">Snapchat</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">46%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#fd7e14", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/05.png" width="32" alt="" />
                                        <p className="mb-0">Google</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">38%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#0dcaf0", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/08.png" width="32" alt="" />
                                        <p className="mb-0">Altaba</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">15%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#6f42c1", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1">
                                        <img src="./assets/images/apps/07.png" width="32" alt="" />
                                        <p className="mb-0">Altaba</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">15%</p>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 data-attributes">
                                            <span
                                                data-peity='{ "fill": ["#ff00b3", "rgb(0 0 0 / 10%)"], "innerRadius": 14, "radius": 18 }'>5/7</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-4">
                    <div className="card w-100 rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-0 fw-bold">Ongoing Projects</h5>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-4">
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/angular.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">Angular 12</h6>
                                            <p className="mb-0">Admin Template</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-danger" style={{ width: '95%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">95%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/react.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">React Js</h6>
                                            <p className="mb-0">eCommerce Admin</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">90%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/vue.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">Vue Js</h6>
                                            <p className="mb-0">Dashboard Template</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-success" style={{ width: '85%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">85%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/bootstrap.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">Bootstrap 5</h6>
                                            <p className="mb-0">Corporate Website</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-voilet" style={{ width: '75%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">75%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/magento.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">Magento</h6>
                                            <p className="mb-0">Shoping Portal</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-orange" style={{ width: '65%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">65%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/django.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">Django</h6>
                                            <p className="mb-0">Backend Admin</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar bg-cyne" style={{ width: '55%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">55%</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <div className="d-flex align-items-center gap-3 flex-grow-1 flex-shrink-0">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-3 border">
                                            <img src="./assets/images/projects/python.png" width="30" alt="" />
                                        </div>
                                        <div className="">
                                            <h6 className="mb-0 fw-bold">Python</h6>
                                            <p className="mb-0">User Panel</p>
                                        </div>
                                    </div>
                                    <div className="progress w-25" style={{ height: '5px' }}>
                                        <div className="progress-bar" style={{ width: '45%' }}></div>
                                    </div>
                                    <div className="">
                                        <p className="mb-0 fs-6">45%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-4">
                    <div className="card rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-0 fw-bold">Recent Transactions</h5>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="payments-list">
                                <div className="d-flex flex-column gap-4">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center bg-danger rounded-circle">
                                            <span className="material-icons-outlined text-white">shopping_cart</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0 fw-bold">Online Purchase</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6 className="mb-0 fw-bold">$97,896</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-circle bg-primary">
                                            <span className="material-icons-outlined text-white">monetization_on</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Bank Transfer</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <h6 className="mb-0 fw-bold">$86,469</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-circle bg-success">
                                            <span className="material-icons-outlined text-white">credit_card</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Credit Card</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <h6 className="mb-0 fw-bold">$45,259</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-circle bg-purple">
                                            <span className="material-icons-outlined text-white">account_balance</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Laptop Payment</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <h6 className="mb-0 fw-bold">$35,249</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-circle bg-orange">
                                            <span className="material-icons-outlined text-white">savings</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Template Payment</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <h6 className="mb-0 fw-bold">$68,478</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-circle bg-info">
                                            <span className="material-icons-outlined text-white">paid</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">iPhone Purchase</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <h6 className="mb-0 fw-bold">$55,128</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="wh-48 d-flex align-items-center justify-content-center rounded-circle bg-pink">
                                            <span className="material-icons-outlined text-white">card_giftcard</span>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">Account Credit</h6>
                                            <p className="mb-0">03/10/2022</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <h6 className="mb-0 fw-bold">$24,568</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-12 col-xl-4 d-flex">
                    <div className="card w-100 rounded-4">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between mb-3">
                                <div className="">
                                    <h5 className="mb-0 fw-bold">Popular Products</h5>
                                </div>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle-nocaret options dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        <span className="material-icons-outlined fs-5">more_vert</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-4">
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="78" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">Apple Hand Watch</h6>
                                        <p className="mb-0">Sale: 258</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$199</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="78" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">Mobile Phone Set</h6>
                                        <p className="mb-0">Sale: 169</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$159</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="78" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">Fancy Chair</h6>
                                        <p className="mb-0">Sale: 268</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$678</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="78" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">Blue Shoes Pair</h6>
                                        <p className="mb-0">Sale: 859</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$279</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="78" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">Blue Yoga Mat</h6>
                                        <p className="mb-0">Sale: 328</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$389</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="75" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">White water Bottle</h6>
                                        <p className="mb-0">Sale: 992</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$584</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <img src="https://placehold.co/75x50" width="78" className="rounded-3" alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="mb-0 fw-bold">Laptop Full HD</h6>
                                        <p className="mb-0">Sale: 489</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0">$398</h6>
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

export default Dashboard;