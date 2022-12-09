import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Skeleton.css'

const SkeletonMovieCard = () => {
    return (
        <>
            <div className='skeletonMovieCard'>
                <Skeleton height={250} />
                <Skeleton width={75} />
                <Skeleton width={180} />
                <Skeleton width={150} />
            </div>
        </>
    )
}

export default SkeletonMovieCard