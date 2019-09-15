import React from 'react';
import {Link} from 'react-router-dom';

function DataList() {
    return (
        <div>
            <h1>FBI Data</h1>
            <button>
            <Link to='/'>
                Home
            </Link>
            </button>
            <button>
            <Link to='/search/'>
             Search Data
           </Link>
           </button>
        </div>
    )
}

export default DataList;
