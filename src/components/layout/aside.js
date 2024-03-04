import React from 'react';

function Aside() {
    return (
        <aside className="mini-sidebar d-flex align-items-center flex-column justify-content-between">
            <div className="user">
                <a href="#offcanvasUserDetails" data-bs-toggle="offcanvas" className="user-icon">
                    <i className="material-icons-outlined">account_circle</i>
                </a>
            </div>
            <div className="quick-menu ps">
                <nav className="nav flex-column gap-1">
                    <a className="nav-link" href="index.html"><i className="material-icons-outlined">home</i></a>
                    <a className="nav-link" href="index2.html"><i className="material-icons-outlined">poll</i></a>
                    <a className="nav-link" href="#"><i className="material-icons-outlined">apps</i></a>
                    <a className="nav-link" href="ecommerce-products.html"><i
                        className="material-icons-outlined">shopping_cart</i></a>
                    <a className="nav-link" href="#"><i className="material-icons-outlined">forum</i></a>
                    <a className="nav-link" href="#"><i className="material-icons-outlined">event</i></a>
                </nav>
                <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}>
                    <div className="ps__thumb-x" tabIndex="0" style={{ left: '0px', width: '0px' }}></div>
                </div>
                <div className="ps__rail-y" style={{ top: '0px', right: '0px' }}>
                    <div className="ps__thumb-y" tabIndex="0" style={{ top: '0px', height: '0px' }}></div>
                </div>
            </div>
            <div className="mini-footer dark-mode">
                <a href="#" className="footer-icon dark-mode-icon">
                    <i className="material-icons-outlined">dark_mode</i>
                </a>
            </div>
        </aside>
    );
}

export default Aside;