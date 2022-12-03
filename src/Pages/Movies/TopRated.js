import React, { useState, useEffect } from 'react'
import Navigation from '../includes/Navigation'
import { BASEURL, API_KEY, IMG_BASEURL } from '../../Constents/Contents'
import Axios from 'axios'
import moment from 'moment'
import './MovieCard.css'

const TopRated = () => {

    const [topRatedMovie, setTopRatedMovie] = useState()

    const fetchTopRated = () => {
        Axios.get(`${BASEURL}top_rated${API_KEY}`)
            .then(data => {
                setTopRatedMovie(data.data.results)
                console.log('top_rated movies', data.data.results)
            })
    }

    useEffect(() => {
        fetchTopRated()
    }, [])

    return (
        <>
            <Navigation />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='title'>
                            <h1>Top Rated Movies</h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {topRatedMovie && topRatedMovie.map((curElt) => {
                        return (
                            <>
                                <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6'>
                                    <div className='movieCard'>
                                        <div className='movieCardImg' style={{ backgroundImage: `url(${IMG_BASEURL + curElt?.poster_path})` }}></div>
                                        <div>{curElt?.vote_average}</div>
                                        <div className='movieCardContent'>
                                            <h4>{curElt?.title}</h4>
                                            <p>{moment(curElt?.release_date).format('LL')}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default TopRated