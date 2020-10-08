import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';

function Movies ({title}) {
    return (<div>{title}</div>);
}

export default Movies;
