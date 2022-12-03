import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import Popular from '../Pages/Movies/Popular'
import TopRated from '../Pages/Movies/TopRated'
import Upcoming from '../Pages/Movies/Upcoming'
import Home from '../Pages/Home'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/popular' element={<Popular />} />
                <Route path='/top-rated' element={<TopRated />} />
                <Route path='/upcoming' element={<Upcoming />} />
            </Routes>
        </>
    )
}

export default Routers