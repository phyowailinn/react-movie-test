import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
	constructor(props){
	    super(props);
	}	

    handlePageNumber() {
    	var offset = 5;
    	if (!this.props.page) {
    		return [];
    	}
    	let from = this.props.page - offset;
    	if (from < 1) {
    		from = 1;
    	}
    	let to = from + (offset * 2);
    	if (to >= this.props.total) {
    		to = this.props.total;
    	}
    	let pagesArray = [];
    	for (let page = from; page <= to; page++) {
    		pagesArray.push(page);
    	}

    	return pagesArray;
    }

    hasNext() {
    	if (this.props.total > this.props.page) 
    	{ 
    		return <li className=""><a href="#" onClick={() => this.handleChange(this.props.page+1)}>&raquo;</a></li>; 
    	} else { 
    		return <li className="hidden"><a href="#">&raquo;</a></li>; 
    	};
    	 
    }

    hasPrev() {
    	if (this.props.page > 1) { 
    		return <li className=""><a href="#" onClick={() => this.handleChange(this.props.page-1)}>&laquo;</a></li>; 
    	} else { 
    		return <li className="hidden"><a href="#">&laquo;</a></li>; 
    	};
    }

	handleChange(pageNumber){
		this.props.handle(pageNumber)
	}

	render() {
	    return(
	        <ul className="tsc_pagination tsc_paginationA tsc_paginationA06">
	        	{ this.hasPrev() }
	        	
				{ this.handlePageNumber().map( val => (
					<li key={val}><a className={val==this.props.page?'current':''} href="#" onClick={() => this.handleChange(val)}>{val}</a></li>
				)) }

				{ this.hasNext() }
			</ul>
		);
	}
}

export default Pagination;