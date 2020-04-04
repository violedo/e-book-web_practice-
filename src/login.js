import React from "react";
import './login.css'
class login extends React.Component{
    render() {
        return (
            <div className="loginBg">
                <div className="jumbotron bg-secondary col-3 mx-auto my-5">
                    <h2 className="loginHead">请直接按登陆键跳转</h2>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">账号</span>
                        </div>
                        <input type="text" className="form-control" placeholder="请直接点击登录" aria-label="Username"
                               aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">密码</span>
                        </div>
                        <input type="text" className="form-control" placeholder="请直接点击登录" aria-label="Username"
                               aria-describedby="basic-addon1"></input>
                    </div>
                    <a className="btn btn-info float-right" href="#">登录</a>
                </div>
            </div>

        )
    }
}

export default login;
