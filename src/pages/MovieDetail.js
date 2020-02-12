import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { fetchDetail } from '../actions';
import Footer from '../components/Footer';
import moment from 'moment'
import { Link } from 'react-router-dom';

const DetailPage = props => {
  
  const imagePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

  const renderDetail = () => {
    if (props.detail) {
      var loopGen = props.detail.genres.map(gen => gen.name).join(" / ");  
      var loopLang = props.detail.spoken_languages.map(lang => lang.name).join(" , ");
      return (
        <div>
          <div className="row">
            <div id="movie-poster" className="col-xs-10 col-sm-6 col-lg-5">
              <img className="img-responsive" src={imagePath+props.detail.poster_path} />
            </div>
            <div id="movie-info" className="col-xs-10 col-sm-14 col-md-7 col-lg-8 col-lg-offset-1">
              <div className="hidden-xs">
                <h1>Ben 10: Secret of the Omnitrix</h1>
                <h2>{moment(props.detail.release_date).format('YYYY')}</h2>
                <h2>{ loopGen }</h2>
              </div>
              <p className="hidden-xs hidden-sm">
                <em className="pull-left">Language: &nbsp;</em><br />
                <span style={{ fontSize: '75%',color: '#9C969C' }}>{ loopLang }</span>
              </p>
              <p className="hidden-xs hidden-sm">
                <em className="pull-left">Revenue: &nbsp;</em><br />
                <span style={{ fontSize: '75%',color: '#9C969C' }}>{ props.detail.revenue.toLocaleString()}</span>
              </p>
              <p className="hidden-xs hidden-sm">
              </p>
              <div className="rating-row">
                <a className="icon" href="https://www.imdb.com/title/tt1146431/" title="IMDb Rating" target="_blank"> <img src="/assets/images/logo-imdb.svg" alt="IMDb Rating" /> </a>
                <span>{ props.detail.vote_average} / 10</span>
              </div>
            </div>
          </div>
          <div id="movie-sub-info" className="row">
              <div id="synopsis" className="col-sm-10 col-md-13 col-lg-12">
                <h3>Overview</h3>
                <p>{props.detail.overview}</p>
              </div>
              <div id="crew" className="col-sm-10 col-md-7 col-lg-offset-1">
                <div className="directors">
                  <h3>Director</h3>
                  <div className="list-cast">

                  </div>
                </div>
              </div>
          </div>
        </div>
      );
    };    
  };

  const renderBackground = () => {  
    if (props.detail) {  
      var cusStyle = {
        'background': "url("+imagePath+props.detail.backdrop_path+") no-repeat center center", 
        'backgroundSize': "cover"
      }

      return (
        <div>
          <div id="background-image" style={cusStyle}></div>
          <div id="background-overlay"></div>
        </div>
      );
    };
  };
  
  const { detail, match } = props;
  const { fetchDetail: loadDetail } = props;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    loadDetail(match.params.id);
  }, [loadDetail,match.params.id]);

  return (
    <div>
      { renderBackground() }          
      <div className="main-content">
        <div className="container" id="movie-content">          
            { renderDetail() }          
        </div>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    detail: state.movieRd.detail
  };
};

DetailPage.propTypes = {
  detail: PropTypes.objectOf(PropTypes.any),
  fetchDetail: PropTypes.func
};

DetailPage.defaultProps = {
  detail: null,
  fetchDetail: null
};

export default connect(
  mapStateToProps,
  { fetchDetail }
)(DetailPage);
