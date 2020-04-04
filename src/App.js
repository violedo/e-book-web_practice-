import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './bootstrap.min.css';
import theLordoftheRings from './TheLordoftheRings.jpg';

const nav=["E-book","Home","分类","购物车","登陆"];
const headers = ["Cover","Book", "Author", "Language", "Published", "Sales"];
const data = [["","The Lord of the Rings", "J. R. R. Tolkien", "English", "1954-1955", "150 million"],
    ["","Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"],
    ["","Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"],
    ["","And Then There Were None", "Agatha Christie", "English", "1939", "100 million"],
    ["","Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754-1791", "100 million"],
    ["","The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
    ["","She: A History of Adventure", "H. Rider Haggard", "English", "1887", "100 million"]];

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          data:data,
          sortby:null,
          descending:false,
          aisOpen:false,
          bisOpen:false,
          searchby:1,
          toSearchData:data,
          initialData:data,
          nav:nav,
          headers:headers,
          edit:null
      };
  }

  atoggleOpen = () => this.setState({ aisOpen: !this.state.aisOpen });
  btoggleOpen = () => this.setState({ bisOpen: !this.state.bisOpen });
  searchChange=(a)=> {this.setState({searchby:a,bisOpen:false});}



    sort = (e) => {
        let column = e.target.cellIndex;
        let data = this.state.data.slice();
        let descending = this.state.sortby === column && !this.state.descending;
        data.sort(function (a, b) {
            return descending
                ? (a[column] < b[column] ? 1 : -1)
                : (a[column] > b[column] ? 1 : -1);
        });
        this.setState({
            data: data,
            sortby: column,
            descending: descending,
        });
    }

  search=(e)=>{
      let needle = e.target.value.toLowerCase();
      if (!needle) {
          this.setState({toSearchData: this.state.initialData});
          return;
      }
      let idx = this.state.searchby;
      let searchdata = this.state.initialData.filter(function (row) {
          return row[idx].toString().toLowerCase().indexOf(needle) > -1;
      });
      this.setState({toSearchData: searchdata});
  }

    showEditor = (e) => {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex,
            }
        });
    };

    save = (e) => {
        e.preventDefault();
        let input = e.target.firstChild;
        let data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null,
            data: data,
        });
    };

  toggleSearch = () => {
        this.setState(
            {
                data:this.state.toSearchData,
            }
        );
  }



  render=()=>{
      return (
            <div>
                {this.renderNavbar()}
                {this.renderTable()}
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
                <form className="form-inline my-2 my-lg-0 mx-auto">
                  <input onChange={this.search} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <div className="d-flex">
                    <div className="btn-group">
                        <button onClick={this.toggleSearch} type="submit" className="btn btn-outline-success my-2 my-sm-0">{search}</button>
                        <button onClick={this.btoggleOpen} type="button" className="btn btn-outline-success my-2 my-sm-0 dropdown-toggle dropdown-toggle-split"
                                id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" data-reference="parent">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className={bmenuClass} aria-labelledby="dropdownMenuReference">
                            <a onClick={()=>this.searchChange(1)} className="dropdown-item" href="#">{this.state.headers[1]}</a>
                            <a onClick={()=>this.searchChange(2)} className="dropdown-item" href="#">{this.state.headers[2]}</a>
                            <a onClick={()=>this.searchChange(3)} className="dropdown-item" href="#">{this.state.headers[3]}</a>
                            <a onClick={()=>this.searchChange(4)} className="dropdown-item" href="#">{this.state.headers[4]}</a>
                            <a onClick={()=>this.searchChange(5)} className="dropdown-item" href="#">{this.state.headers[5]}</a>
                        </div>
                    </div>
                    </div>
                </form>
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
              <h1 className="my-font">Welcome to my E-book store</h1>
            </div>
          </div>
      );
  }

  renderTable=()=>{
      return(
          <div class="col-8 mx-auto">
              <table class="table table-hover">
                  <thead onClick={this.sort}>
                  <tr>{
                      this.state.headers.map(function (title, idx) {
                          if (this.state.sortby === idx) {
                              title += this.state.descending ? ' \u2191' : ' \u2193';
                          }
                          return <th key={idx}>{title}</th>;
                      }, this)
                  }</tr>
                  </thead>
                  <tbody onDoubleClick={this.showEditor}>
                  {this.state.data.map(function (row,rowidx) {
                      return (
                          <tr key={rowidx}>{
                              row.map(function (cell, idx) {
                                  let content = cell;
                                  let edit = this.state.edit;
                                  if (idx===0)
                                      return <td><img className="my-image" src={theLordoftheRings}></img></td>;
                                  else {
                                      if (edit && edit.row === rowidx && edit.cell === idx) {
                                          content = (
                                              <form onSubmit={this.save}>
                                                  <input type="text" defaultValue={cell}/>
                                              </form>
                                          );
                                      }
                                      return <td key={idx} data-row={rowidx}>{content}</td>;
                                  }
                              }, this)}
                          </tr>
                      );
                  }, this)}
                  </tbody>
              </table>
          </div>
      );
  }
};



export default App;
