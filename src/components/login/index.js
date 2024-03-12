import React, { useState, useEffect } from "react";
import * as ApiService from "../../services/ApiService"
import { trackPromise } from 'react-promise-tracker';
import { withRouter } from "react-router-dom";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 

  function doLogin() {
    if (loading){
      return;
    } 

    if (username == '' || password == ''){
      window.showAlert("Vui lòng nhập username hoặc password!");
      return;
    }

    setLoading(true)
    trackPromise(new Promise((resolve)=>{
      
        ApiService.loginAdmin(username,password).then((data)=>{
            console.log(props)
            props.history.push("/")
            resolve()
            setLoading(false)
            trackPromise(new Promise((resolve)=>{}),"authen")
        }).catch(e=>{
            console.log(e)
            resolve()
            setLoading(false)
            window.showAlert("Lỗi đăng nhập!");
        })
    }),"loading")

  }

  useEffect(() => {
    const handleTogglePassword = (event) => {
        event.preventDefault();
        const passwordInput = document.querySelector('#show_hide_password input');

        if (passwordInput.type === 'text') {
            passwordInput.type = 'password';
            document.querySelector('#show_hide_password i').classList.remove('bi-eye-slash-fill');
            document.querySelector('#show_hide_password i').classList.add('bi-eye-fill');
        } else if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            document.querySelector('#show_hide_password i').classList.remove('bi-eye-fill');
            document.querySelector('#show_hide_password i').classList.add('bi-eye-slash-fill');
        }
    };

    document.querySelector('#show_hide_password a').addEventListener('click', handleTogglePassword);

    // Cleanup function
    return () => {
        document.querySelector('#show_hide_password a').removeEventListener('click', handleTogglePassword);
    };
  }, []);
  useEffect(() => {
    const form = document.getElementById('myForm');

    const handleSubmit = (event) => {
        // Ngăn chặn hành vi mặc định của form reload
        event.preventDefault();

        // Xử lý logic của form ở đây
        console.log('Form submitted!');
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup: Loại bỏ event listener khi component unmount
    return () => {
        form.removeEventListener('submit', handleSubmit);
    };
  }, []);
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
          <div className="card rounded-4">
            <div className="card-body p-5">
              <img src="./assets/images/logo1.png" className="mb-4" width="145" alt="" />
              <h4 className="fw-bold">Get Started Now</h4>
              <p className="mb-0">Enter your credentials to login your account</p>

              <div className="form-body my-4">
                <form className="row g-3" id="myForm">
                  <div className="col-12">
                    <label htmlFor="inputEmailAddress" className="form-label">Username</label>
                    <input onChange = {(e)=>setUsername(e.target.value)} value={username} id="inputEmailAddress" type="text" className="form-control" placeholder="Enter username"/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputChoosePassword" className="form-label">Password</label>
                    <div className="input-group" id="show_hide_password">
                      <input onChange = {(e)=>setPassword(e.target.value)} value={password} type="password" id="inputChoosePassword" className="form-control border-end-0" placeholder="Enter Password"/> 
                      <a href="#" className="input-group-text bg-transparent"><i className="bi bi-eye-slash-fill"></i></a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-md-6 text-end"> <a href="#">Forgot Password ?</a>
                  </div>
                  {!loading?
                    <div className="col-12">
                      <div className="d-grid">
                        <button onClick={()=>{doLogin()}} type="submit" className="btn btn-primary">Login</button>
                      </div>
                    </div>:
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary">Doing login ...</button>
                      </div>
                    </div>
                  }
                  <div className="col-12">
                    <div className="text-start">
                      <p className="mb-0">Don't have an account yet? <a href="#">Sign up here</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>

              <div className="separator section-padding">
                <div className="line"></div>
                <p className="mb-0 fw-bold">OR</p>
                <div className="line"></div>
              </div>

              <div className="d-flex gap-3 justify-content-center mt-4">
                <a href="#" className="wh-48 d-flex align-items-center justify-content-center rounded-circle border">
                  <img src="./assets/images/apps/05.png" width="30" alt="" />
                </a>
                <a href="#" className="wh-48 d-flex align-items-center justify-content-center rounded-circle border">
                  <img src="./assets/images/apps/17.png" width="30" alt="" />
                </a>
                <a href="#" className="wh-48 d-flex align-items-center justify-content-center rounded-circle border">
                  <img src="./assets/images/apps/18.png" width="30" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);