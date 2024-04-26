import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

export const Cards = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  })
  return (
    <>
      {isLoading ?
        <div key={props.id} className='rounded-xl relative w-1/5 bg-slate-800/20'>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={5}></Skeleton>
          </SkeletonTheme> 
        </div>
          :
        <Link to={`/movies/${props.movie.id}`} key={props.id} className='relative w-1/5 rounded-xl'>
          <img className='rounded-xl' src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}/>
          <div className='absolute bottom-1'>
            <div className='font-bold text-xl text-red-800'>{props.movie.title}</div>
          </div>
        </Link>
      }
    </>
  )
}
