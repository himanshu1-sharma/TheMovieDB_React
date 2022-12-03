import Axios from 'axios'
import './MovieCard.css'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { API_URL, API_IMG } from '../../Constents/Contents'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MovieCard = () => {

    const [movies, setMovies] = useState()

    const fetchMovie = () => {
        Axios.get(`${API_URL}`)
            .then(data => {
                setMovies(data.data.results)
                console.log('movie data', data.data.results)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [])


    return (
        <>
            <section className='container-fluid p-0'>
                <div className='container'>
                    <div className='row'>
                        <div className='movieCardBox'>
                            <Swiper
                                slidesPerView={8}
                                spaceBetween={30}
                                centeredSlides={false}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {movies?.map((curElt) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div className='movieCard'>
                                                    <div className='movieCardImg' style={{ backgroundImage: `url(${API_IMG + curElt?.poster_path})` }}>
                                                        {/* <img src={`${API_IMG + curElt?.poster_path}`} /> */}
                                                    </div>
                                                    <div>{curElt?.vote_average}</div>
                                                    <h4>{curElt?.title}</h4>
                                                    <p>{moment(curElt?.release_date).format('LL')}</p>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })}

                            </Swiper>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieCard


