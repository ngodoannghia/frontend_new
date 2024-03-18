import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {baseurl} from '../config'


function Sidebar2(props) {
    const history = useHistory();

    return (
        <div className="offcanvas offcanvas-start w-260" data-bs-scroll="true" tabIndex="-1" id="offcanvasPrimaryMenu">
            <div className="offcanvas-header border-bottom h-70">
                <img src="./assets/images/logo1.png" width="160" alt="" />
                <a href="#" className="primaery-menu-close" data-bs-dismiss="offcanvas">
                    <i className="material-icons-outlined">close</i>
                </a>
            </div>
            <div className="offcanvas-body">
                <nav className="sidebar-nav mm-active">
                    <ul className="metismenu mm-show" id="sidenav">
                        <li className="mm-active">
                            <a href="#" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">home</i>
                                </div>
                                <div className="menu-title">Dashboard</div>
                            </a>
                            <ul className="mm-collapse mm-show">
                                <li className="mm-active"><a href={baseurl + '/'}><i
                                    className="material-icons-outlined">arrow_right</i>Dashboard1</a>
                                </li>
                                <li><a href={baseurl + '/'}><i className="material-icons-outlined">arrow_right</i>Dashboard2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">inventory_2</i>
                                </div>
                                <div className="menu-title">Quản lý nhạc</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href={baseurl + '/category'}><i
                                    className="material-icons-outlined">arrow_right</i>Thể loại</a>
                                </li>
                                <li><a href={baseurl + '/country'}><i
                                    className="material-icons-outlined">arrow_right</i>Country</a>
                                </li>
                                <li><a href={baseurl + '/album'}><i
                                    className="material-icons-outlined">arrow_right</i>Album</a>
                                </li>
                                <li><a href={baseurl + '/playlist'}><i
                                    className="material-icons-outlined">arrow_right</i>Playlist</a>
                                </li>
                                <li><a href={baseurl + '/music'}><i
                                    className="material-icons-outlined">arrow_right</i>Bài hát</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">card_giftcard</i>
                                </div>
                                <div className="menu-title">Quản lý user</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href={baseurl + '/user'}><i
                                    className="material-icons-outlined">arrow_right</i>Quản lý khách hàng</a>
                                </li>
                                <li><a href="ecommerce-products.html"><i
                                    className="material-icons-outlined">arrow_right</i>Quản lý ca sĩ</a>
                                </li>
                                <li><a href="ecommerce-orders.html"><i
                                    className="material-icons-outlined">arrow_right</i>Chi tiết khách hàng</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">shopping_bag</i>
                                </div>
                                <div className="menu-title">Quản lý order</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="ecommerce-add-product.html"><i
                                    className="material-icons-outlined">arrow_right</i>Quản lý đơn hàng</a>
                                </li>
                                <li><a href="ecommerce-add-product.html"><i
                                    className="material-icons-outlined">arrow_right</i>Chi tiết đơn hàng</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href={baseurl + '/pack'}>
                                <div className="parent-icon"><i className="material-icons-outlined">sports_football</i>
                                </div>
                                <div className="menu-title">Gói dịch vụ</div>
                            </a>
                        </li>
                        <li className="menu-label">Others</li>
                        <li>
                            <a href="faq.html">
                                <div className="parent-icon"><i className="material-icons-outlined">help_outline</i>
                                </div>
                                <div className="menu-title">FAQ</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascrpt:;">
                                <div className="parent-icon"><i className="material-icons-outlined">description</i>
                                </div>
                                <div className="menu-title">Documentation</div>
                            </a>
                        </li>
                        <li>
                            <a href="javascrpt:;">
                                <div className="parent-icon"><i className="material-icons-outlined">support</i>
                                </div>
                                <div className="menu-title">Support</div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="offcanvas-footer p-3 border-top h-70">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="DarkMode" />
                    <label className="form-check-label" htmlFor="DarkMode">Dark Mode</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar2;