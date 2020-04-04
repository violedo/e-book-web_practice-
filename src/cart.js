import React from "react";

const nav=["E-book","Home","分类","购物车","登陆"];
const headers = ["Cover","Book", "Author", "Language", "Published", "Sales"];
class cart extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            nav:nav,
            headers:headers
        };
    }
    render=()=> {
        return (
            <div>
                {this.renderNavbar()}
                {this.renderCart()}
            </div>
        );
    }

    renderNavbar=()=>{
        const amenuClass = `dropdown-menu${this.state.aisOpen ? " show" : ""}`;
        const bmenuClass = `dropdown-menu${this.state.bisOpen ? " show" : ""}`;
        const search=`Search by ${this.state.headers[this.state.searchby]}`;
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">{this.state.nav[0]}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{this.state.nav[1]}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a onClick={this.atoggleOpen} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.state.nav[2]}
                                </a>
                                <div className={amenuClass} aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">小说</a>
                                    <a className="dropdown-item" href="#">教育</a>
                                    <a className="dropdown-item" href="#">文学</a>
                                    <a className="dropdown-item" href="#">儿童</a>
                                    <a className="dropdown-item" href="#">科技</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">其他</a>
                                </div>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-end">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#/cart">{this.state.nav[3]}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#/login">{this.state.nav[4]}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron bg-dark jumbotron-fluid">
                    <h1 className="my-font">This is your cart</h1>
                </div>
            </div>
        );
    }

    renderCart=()=>{
        return(
            <div class="col-8 mx-auto">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>The Lord of the Rings</td>
                        <td>$999.99</td>
                        <td>1</td>
                        <td><input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input></td>
                    </tr>
                </table>
                <button type="button" className="btn btn-primary btn-lg float-right">Buy</button>
            </div>
        )
    }

};

export default cart;