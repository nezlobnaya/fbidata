import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';

function DataList() {
    return (
        <div>
            <h1>FBI Data</h1>
            <button>
            <Link to={`/${DataList}`}>
                Home
            </Link>
            <Link to={`/search/${SearchForm}`}>
             Search Data
           </Link>
           </button>
        </div>
    )
}

export default DataList;
