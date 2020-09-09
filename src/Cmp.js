import React from 'react';

function Cmp({ name, img }) {
    return (<div>
        <li> {name} </li>
        <li>{img}</li>
    </div>);
}
export default Cmp;