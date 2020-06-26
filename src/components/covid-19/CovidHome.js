import React, { useState, useEffect } from 'react';
import { getData } from '../../api/SgaSurveyResultsApi';

const CovidHome = () => {
    const [SGAData, setSGAData] = useState([]);
    useEffect(() => {
        getData().then(data => setSGAData(data));
    }, []);

    return (<>
        <div className='jumbotron'>
            <h1>Covid-19 Pandemic Resources</h1>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Issue</th>
                    <th>Response Percent</th>
                </tr>
            </thead>
            <tbody>
                {SGAData.map(data => <tr><td>{data.label}</td><td>{data.percentage}</td></tr>)}
            </tbody>
        </table>
    </>);
}
export default CovidHome;