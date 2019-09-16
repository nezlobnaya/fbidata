import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';




const DataList = props => {
    console.log('props', props);
    let type = props.match.params.type;
        const [datasets, setData] = useState([])
        
        useEffect(() => {
                axios
                    .get('https://api.usa.gov/crime/fbi/sapi/api/participation/national?api_key=OOV2OEa2E6zPJ9gsRwKobjAzII2dLR4dj2WuEVG9')
                    .then (res => {
                        setData(res.data.results);
                        console.log(res);
                    })
                    .catch(error => {
                        console.log('Server error', error);
                    });
            }, [type])

    return (
        <div>
                <Link to='/search/'>
                Search Data
                </Link> 
        {datasets.map((data, i) => (
            <ul key={i}>
             <li>Year: {data.data_year} Population: {data.population}</li>
             <li>Active agency count:{data.active_agency_count}</li>
             <li>Active agency count:{data.active_agency_count}</li>
             </ul>
        ))};
        </div>
    )
}

export default DataList;
