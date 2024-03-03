import React from 'react';

function Sidebar2() {

    return (
        <div className="offcanvas offcanvas-start w-260" data-bs-scroll="true" tabIndex="-1" id="offcanvasPrimaryMenu">
            <div className="offcanvas-header border-bottom h-70">
                <img src="./assets/images/logo1.png" width="160" alt="" />
                <a href="javascript:;" className="primaery-menu-close" data-bs-dismiss="offcanvas">
                    <i className="material-icons-outlined">close</i>
                </a>
            </div>
            <div className="offcanvas-body">
                <nav className="sidebar-nav mm-active">
                    <ul className="metismenu mm-show" id="sidenav">
                        <li className="mm-active">
                            <a href="javascript:;" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">home</i>
                                </div>
                                <div className="menu-title">Dashboard</div>
                            </a>
                            <ul className="mm-collapse mm-show">
                                <li className="mm-active"><a href="index.html"><i
                                    className="material-icons-outlined">arrow_right</i>eCommerce</a>
                                </li>
                                <li><a href="index2.html"><i className="material-icons-outlined">arrow_right</i>Alternate</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">widgets</i>
                                </div>
                                <div className="menu-title">Widgets</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="widgets-data.html"><i className="material-icons-outlined">arrow_right</i>Data</a>
                                </li>
                                <li><a href="widgets-advance.html"><i
                                    className="material-icons-outlined">arrow_right</i>Advance</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-label">UI Elements</li>
                        <li>
                            <a href="javascript:;" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">inventory_2</i>
                                </div>
                                <div className="menu-title">Cards</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="component-cards-basic.html"><i
                                    className="material-icons-outlined">arrow_right</i>Basic</a>
                                </li>
                                <li><a href="component-cards-advance.html"><i
                                    className="material-icons-outlined">arrow_right</i>Advance</a>
                                </li>
                                <li><a href="component-cards-contact.html"><i
                                    className="material-icons-outlined">arrow_right</i>Contacts</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:;" className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">shopping_bag</i>
                                </div>
                                <div className="menu-title">eCommerce</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="ecommerce-add-product.html"><i
                                    className="material-icons-outlined">arrow_right</i>Add Product</a>
                                </li>
                                <li><a href="ecommerce-products.html"><i
                                    className="material-icons-outlined">arrow_right</i>Products</a>
                                </li>
                                <li><a href="ecommerce-customers.html"><i
                                    className="material-icons-outlined">arrow_right</i>Customers</a>
                                </li>
                                <li><a href="ecommerce-customer-details.html"><i
                                    className="material-icons-outlined">arrow_right</i>Customer Details</a>
                                </li>
                                <li><a href="ecommerce-orders.html"><i
                                    className="material-icons-outlined">arrow_right</i>Orders</a>
                                </li>
                                <li><a href="ecommerce-customer-details.html"><i
                                    className="material-icons-outlined">arrow_right</i>Order Details</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">card_giftcard</i>
                                </div>
                                <div className="menu-title">Components</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="component-alerts.html"><i
                                    className="material-icons-outlined">arrow_right</i>Alerts</a>
                                </li>
                                <li><a href="component-accordions.html"><i
                                    className="material-icons-outlined">arrow_right</i>Accordions</a>
                                </li>
                                <li><a href="component-badges.html"><i
                                    className="material-icons-outlined">arrow_right</i>Badges</a>
                                </li>
                                <li><a href="component-buttons.html"><i
                                    className="material-icons-outlined">arrow_right</i>Buttons</a>
                                </li>
                                <li><a href="component-carousels.html"><i
                                    className="material-icons-outlined">arrow_right</i>Carousels</a>
                                </li>
                                <li><a href="component-media-object.html"><i
                                    className="material-icons-outlined">arrow_right</i>Media
                                    Objects</a>
                                </li>
                                <li><a href="component-modals.html"><i
                                    className="material-icons-outlined">arrow_right</i>Modals</a>
                                </li>
                                <li><a href="component-navs-tabs.html"><i
                                    className="material-icons-outlined">arrow_right</i>Navs &amp; Tabs</a>
                                </li>
                                <li><a href="component-navbar.html"><i
                                    className="material-icons-outlined">arrow_right</i>Navbar</a>
                                </li>
                                <li><a href="component-paginations.html"><i
                                    className="material-icons-outlined">arrow_right</i>Pagination</a>
                                </li>
                                <li><a href="component-popovers-tooltips.html"><i
                                    className="material-icons-outlined">arrow_right</i>Popovers
                                    &amp; Tooltips</a>
                                </li>
                                <li><a href="component-progress-bars.html"><i
                                    className="material-icons-outlined">arrow_right</i>Progress</a>
                                </li>
                                <li><a href="component-spinners.html"><i
                                    className="material-icons-outlined">arrow_right</i>Spinners</a>
                                </li>
                                <li><a href="component-notifications.html"><i
                                    className="material-icons-outlined">arrow_right</i>Notifications</a>
                                </li>
                                <li><a href="component-avtars-chips.html"><i
                                    className="material-icons-outlined">arrow_right</i>Avatrs &amp;
                                    Chips</a>
                                </li>
                                <li><a href="component-typography.html"><i
                                    className="material-icons-outlined">arrow_right</i>Typography</a>
                                </li>
                                <li><a href="component-text-utilities.html"><i
                                    className="material-icons-outlined">arrow_right</i>Utilities</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">view_agenda</i>
                                </div>
                                <div className="menu-title">Icons</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="icons-line-icons.html"><i className="material-icons-outlined">arrow_right</i>Line
                                    Icons</a>
                                </li>
                                <li><a href="icons-boxicons.html"><i
                                    className="material-icons-outlined">arrow_right</i>Boxicons</a>
                                </li>
                                <li><a href="icons-feather-icons.html"><i
                                    className="material-icons-outlined">arrow_right</i>Feather
                                    Icons</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-label">Forms &amp; Tables</li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">toc</i>
                                </div>
                                <div className="menu-title">Forms</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="form-elements.html"><i className="material-icons-outlined">arrow_right</i>Form
                                    Elements</a>
                                </li>
                                <li><a href="form-input-group.html"><i className="material-icons-outlined">arrow_right</i>Input
                                    Groups</a>
                                </li>
                                <li><a href="form-radios-and-checkboxes.html"><i
                                    className="material-icons-outlined">arrow_right</i>Radios &amp;
                                    Checkboxes</a>
                                </li>
                                <li><a href="form-layouts.html"><i className="material-icons-outlined">arrow_right</i>Forms
                                    Layouts</a>
                                </li>
                                <li><a href="form-validations.html"><i className="material-icons-outlined">arrow_right</i>Form
                                    Validation</a>
                                </li>
                                <li><a href="form-wizard.html"><i className="material-icons-outlined">arrow_right</i>Form
                                    Wizard</a>
                                </li>
                                <li><a href="form-file-upload.html"><i className="material-icons-outlined">arrow_right</i>File
                                    Upload</a>
                                </li>
                                <li><a href="form-date-time-pickes.html"><i
                                    className="material-icons-outlined">arrow_right</i>Date
                                    Pickers</a>
                                </li>
                                <li><a href="form-select2.html"><i
                                    className="material-icons-outlined">arrow_right</i>Select2</a>
                                </li>
                                <li><a href="form-repeater.html"><i className="material-icons-outlined">arrow_right</i>Form
                                    Repeater</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">api</i>
                                </div>
                                <div className="menu-title">Tables</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="table-basic-table.html"><i className="material-icons-outlined">arrow_right</i>Basic
                                    Table</a>
                                </li>
                                <li><a href="table-datatable.html"><i className="material-icons-outlined">arrow_right</i>Data
                                    Table</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">apps</i>
                                </div>
                                <div className="menu-title">Apps</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="app-fullcalender.html"><i
                                    className="material-icons-outlined">arrow_right</i>Calendar</a>
                                </li>
                                <li><a href="app-to-do.html"><i className="material-icons-outlined">arrow_right</i>To do</a>
                                </li>
                                <li><a href="app-invoice.html"><i className="material-icons-outlined">arrow_right</i>Invoice</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-label">Pages</li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">lock</i>
                                </div>
                                <div className="menu-title">Authentication</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a className="has-arrow" href="javascript:;"><i
                                    className="material-icons-outlined">arrow_right</i>Basic</a>
                                    <ul className="mm-collapse">
                                        <li><a href="auth-basic-login.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Login</a></li>
                                        <li><a href="auth-basic-register.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Register</a></li>
                                        <li><a href="auth-basic-forgot-password.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Forgot Password</a></li>
                                        <li><a href="auth-basic-reset-password.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Reset Password</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow" href="javascript:;"><i
                                    className="material-icons-outlined">arrow_right</i>Cover</a>
                                    <ul className="mm-collapse">
                                        <li><a href="auth-cover-login.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Login</a></li>
                                        <li><a href="auth-cover-register.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Register</a></li>
                                        <li><a href="auth-cover-forgot-password.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Forgot Password</a></li>
                                        <li><a href="auth-cover-reset-password.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Reset Password</a></li>
                                    </ul>
                                </li>
                                <li><a className="has-arrow" href="javascript:;"><i
                                    className="material-icons-outlined">arrow_right</i>Boxed</a>
                                    <ul className="mm-collapse">
                                        <li><a href="auth-boxed-login.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Login</a></li>
                                        <li><a href="auth-boxed-register.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Register</a></li>
                                        <li><a href="auth-boxed-forgot-password.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Forgot Password</a></li>
                                        <li><a href="auth-boxed-reset-password.html" target="_blank"><i
                                            className="material-icons-outlined">arrow_right</i>Reset Password</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="user-profile.html">
                                <div className="parent-icon"><i className="material-icons-outlined">person</i>
                                </div>
                                <div className="menu-title">User Profile</div>
                            </a>
                        </li>
                        <li>
                            <a href="timeline.html">
                                <div className="parent-icon"><i className="material-icons-outlined">join_right</i>
                                </div>
                                <div className="menu-title">Timeline</div>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">report_problem</i>
                                </div>
                                <div className="menu-title">Pages</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="pages-error-404.html" target="_blank"><i
                                    className="material-icons-outlined">arrow_right</i>404
                                    Error</a>
                                </li>
                                <li><a href="pages-error-505.html" target="_blank"><i
                                    className="material-icons-outlined">arrow_right</i>505
                                    Error</a>
                                </li>
                                <li><a href="pages-coming-soon.html" target="_blank"><i
                                    className="material-icons-outlined">arrow_right</i>Coming Soon</a>
                                </li>
                                <li><a href="pages-starter-page.html" target="_blank"><i
                                    className="material-icons-outlined">arrow_right</i>Blank Page</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="faq.html">
                                <div className="parent-icon"><i className="material-icons-outlined">help_outline</i>
                                </div>
                                <div className="menu-title">FAQ</div>
                            </a>
                        </li>
                        <li>
                            <a href="pricing-table.html">
                                <div className="parent-icon"><i className="material-icons-outlined">sports_football</i>
                                </div>
                                <div className="menu-title">Pricing</div>
                            </a>
                        </li>
                        <li className="menu-label">Charts &amp; Maps</li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">fitbit</i>
                                </div>
                                <div className="menu-title">Charts</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="charts-apex-chart.html"><i
                                    className="material-icons-outlined">arrow_right</i>Apex</a>
                                </li>
                                <li><a href="charts-chartjs.html"><i
                                    className="material-icons-outlined">arrow_right</i>Chartjs</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">sports_football</i>
                                </div>
                                <div className="menu-title">Maps</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a href="map-google-maps.html"><i className="material-icons-outlined">arrow_right</i>Google
                                    Maps</a>
                                </li>
                                <li><a href="map-vector-maps.html"><i className="material-icons-outlined">arrow_right</i>Vector
                                    Maps</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-label">Others</li>
                        <li>
                            <a className="has-arrow" href="javascript:;">
                                <div className="parent-icon"><i className="material-icons-outlined">face_5</i>
                                </div>
                                <div className="menu-title">Menu Levels</div>
                            </a>
                            <ul className="mm-collapse">
                                <li><a className="has-arrow" href="javascript:;"><i
                                    className="material-icons-outlined">arrow_right</i>Level
                                    One</a>
                                    <ul className="mm-collapse">
                                        <li><a className="has-arrow" href="javascript:;"><i
                                            className="material-icons-outlined">arrow_right</i>Level
                                            Two</a>
                                            <ul className="mm-collapse">
                                                <li><a href="javascript:;"><i
                                                    className="material-icons-outlined">arrow_right</i>Level Three</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
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