import React, { useState, useEffect } from 'react'
import Navigation from '../includes/Navigation'
import { useParams } from 'react-router-dom'
import { BASEURL, API_KEY } from '../../Constents/Contents'
import Axios  from 'axios'

const MovieDetail = () => {
    
    const params = useParams()
    const [movieDetail, getMovieDetail] = useState()
    const [movieImage, getMovieImage] = useState()

    const fetchMovieDetail = () => {
        Axios.get(`${BASEURL}${params.id}${API_KEY}`)
        .then(data => {
            getMovieDetail(data.data)
            console.log("movie detail", data.data)
        })
    }

    const fetchMovieImage = () => {
        Axios.get(`${BASEURL}${params.id}/images${API_KEY}`)
        .then(data => {
            getMovieImage(data.data.backdrops)
            console.log("images", data.data.backdrops)
        })
    }

    useEffect(() => {
        fetchMovieDetail()
        fetchMovieImage()
    }, [])

    return (
        <>
            <Navigation />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='title'>
                            <h1>{movieDetail?.original_title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail