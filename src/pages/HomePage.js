import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { fetchMovies } from '../actions';
import SearchForm  from '../components/SearchForm';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import moment from 'moment'
import { Link } from 'react-router-dom';
const queryString = require('query-string');

const HomePage = props => { 
  
  const imagePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  const renderMovies = () => {
    return props.movies.map(movie => (
      <div className="browse-movie-wrap col-xs-10 col-sm-4 col-md-5 col-lg-4" key={movie.title}>
        <Link to={`movie/${movie.id}`} className="browse-movie-link">
          <figure>
            <img className="img-responsive" src={imagePath+movie.poster_path} height="255" />
            <figcaption className="hidden-xs hidden-sm">
              <h4 className="rating">{movie.vote_average} / 10</h4>
              <h5>{movie.title}</h5>
              <span className="button-green-download2-big">View Details</span>
            </figcaption>
          </figure>
        </Link>  
        <div className="browse-movie-bottom">
          <Link to={`movie/${movie.id}`} className="browse-movie-title">{movie.title}</Link> 
          <div className="browse-movie-year">{moment(movie.release_date).format('YYYY')}</div> 
        </div>
      </div>
    ));  
  };

  const changePage = page => {
    const query = getQuery(page);
    const keyword = query.keyword ? `&keyword=${query.keyword}` :'';
    props.history.push({
      path:'/',
      search:`?page=${query.page}${keyword}`
    })
    props.fetchMovies(props.history.location.search)
  }
  
  const getQuery = (page=1) => {
    const params = queryString.parse(props.history.location.search);
    const query = {};
    query.page = page;
    query.keyword = params.keyword;
    return query;
  }

  const renderPagin = () => {
    if (props.page) {
      return (
        <div className="text-center">
          <h2><b>{ props.total_results }</b><span>  Movies found</span></h2>
          <Pagination page={props.page} total={props.total_pages} handle={changePage} />     
        </div>
      );
    }
  }

  const { fetchMovies: loadMovies, location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    loadMovies(location.search);
  }, [loadMovies]);

  return (
      <div className="main-content">
        <SearchForm data={ getQuery() } />
        <div className="browse-content">
          <div className="container">
            { renderPagin() }            
            <section>
              <div className="row">{ renderMovies() }</div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
  );

};

const mapStateToProps = state => {
  return {
    movies: state.movieRd.results,
    page: state.movieRd.page,
    total_results: state.movieRd.total_results,
    total_pages: state.movieRd.total_pages
  };
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.any),
  fetchMovies: PropTypes.func
};

HomePage.defaultProps = {
  movies: [],
  fetchMovies: null
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(HomePage);
