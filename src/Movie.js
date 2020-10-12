import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';
import "./Movie.css";

function Movies ({title}) {
    return (<div className ="movies">
        
        <h2 className="movies__title fs-h2 fw-light">{title}</h2>
        <div className="movies__thumb"></div>
        
        </div>);
}

export default Movies;
