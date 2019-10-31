import React, {useState, useEffect} from 'react';
import '../style/MovieStat.css';

const MovieStat = () => {
    const [clickStat, setClickStat] = useState({});
    useEffect(()=>{
        fetch('http://localhost:3100')
        .then(result => result.json())
        .then(data => {
            setClickStat(data);
        })
    }, []);
    return (
        <div>
            <div className="movie-stat-title">Your Click Statistics</div>
            <table className="movie-stat-table">
                <thead>
                    <tr className="movie-stat-head">
                        <th>Movie Name</th>
                        <th>Number of Clicks</th>
                    </tr>
                </thead>
                <tbody>
                {/* {clickStat && true ? <tr className="movie-stat-row"><td>No Data to Display</td></tr> : */}
                {Object.keys(clickStat).map(
                (result, index) => (<tr key={index} className="movie-stat-row">
                    <td>{result}</td>
                    <td>{clickStat[result]}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    )}

export default MovieStat;