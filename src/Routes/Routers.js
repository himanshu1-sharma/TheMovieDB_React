import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Popular from '../Pages/Movies/Popular'
import TopRated from '../Pages/Movies/TopRated'
import Upcoming from '../Pages/Movies/Upcoming'
import Home from '../Pages/Home'
import MovieDetail from '../Pages/Movies/MovieDetail'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)


const Routers = () => {

    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((curElt) => (curElt === "light" ? "dark" : "light"))
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div className='themeColor' id={theme}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/popular' element={<Popular />} />
                        <Route path='/top-rated' element={<TopRated />} />
                        <Route path='/upcoming' element={<Upcoming />} />
                        <Route path="/movie-detail/:id" element={<MovieDetail />} />
                    </Routes>
                    <div className='themeSwitch'>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                </div>

            </ThemeContext.Provider>
        </>
    )
}

export default Routers