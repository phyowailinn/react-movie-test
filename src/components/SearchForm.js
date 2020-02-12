import React, { Component } from 'react';

class SearchForm extends Component {

  constructor(props){
      super(props);
      this.state = { keyword: props.data.keyword }
  } 

  handleChange(value){
    this.setState({
      keyword: value
   });
  }
  
  render() {
    return (
      <div id="main-search" className="content-dark hidden-sm hidden-xs">
        <div className="container">
          <form method="get" action="">
            <div id="main-search-fields">
              <p className="pull-left term">Search Movie:</p>
              <input name="keyword" value={ this.state.keyword } type="search" onChange={e => this.handleChange(e.target.value)} />
            </div>
            <div id="main-search-btn">
              <input className="button-green-download2-big" type="submit" value="Search" />
            </div>
          </form>
        </div>
      </div>
    );
  };

}

export default SearchForm;
