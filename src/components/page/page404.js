import React from "react";

function Page404() {
    return (
        <div className="pt-5">

            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-lg-12">
                        <div className="text-center error-pages">
                            <h1 className="error-title text-primary mb-3">404</h1>
                            <h2 className="error-sub-title">404 NOT FOUND</h2>

                            <p className="error-message text-uppercase">SORRY, AN ERROR HAS OCCURED, REQUESTED PAGE NOT FOUND!</p>

                            <div className="mt-4 d-flex align-items-center justify-content-center gap-3">
                                <a href="index.html" className="btn btn-primary rounded-5 px-4"><i className="bi bi-house-fill me-2"></i>Go To Home</a>
                                <a href="javascript:void();" className="btn btn-light rounded-5 px-4"><i className="bi bi-arrow-left me-2"></i>Previous Page </a>
                            </div>

                            <div className="mt-4">
                                <p className="text-light">Copyright © 2023 | All rights reserved.</p>
                            </div>
                                <hr className="border-light border-2"/>
                                <div className="list-inline contacts-social mt-4">
                                    <a href="#" className="list-inline-item bg-facebook text-white border-0"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="list-inline-item bg-pinterest text-white border-0"><i className="bi bi-pinterest"></i></a>
                                    <a href="#" className="list-inline-item bg-whatsapp text-white border-0"><i className="bi bi-whatsapp"></i></a>
                                    <a href="#" className="list-inline-item bg-linkedin text-white border-0"><i className="bi bi-linkedin"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Page404;