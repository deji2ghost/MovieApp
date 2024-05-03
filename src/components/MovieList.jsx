import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import { Cards } from './Cards'

export const MovieList = (props) => {
  const {type} = useParams()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${type ? type :'now_playing'}?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDJhNTdjNzAzZDM5OWI5ZTIxZmViMGIyNGZlNDY4MSIsInN1YiI6IjY1Y2IzZDBkNWJlMDBlMDE3Y2FkMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsziZ5tUMp7czPlaOXUCSdjcHMElbZ-kw5LsAEqdusY'
      }
    }).then(res => props.setMovietype(res.data.results))
  }, [type])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${type ? type :'now_playing'}?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDJhNTdjNzAzZDM5OWI5ZTIxZmViMGIyNGZlNDY4MSIsInN1YiI6IjY1Y2IzZDBkNWJlMDBlMDE3Y2FkMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsziZ5tUMp7czPlaOXUCSdjcHMElbZ-kw5LsAEqdusY'
      }
    }).then(res => props.setMovietype(res.data.results))
  }, [])
  return (
    <div className='cursor-pointer grid grid-cols-4 border'>
      { 
        props.searchedMovie.map(movie => {
          return(
            <div key={movie.id}>
              <Cards movie={movie} id={movie.id}/>
            </div>
          )
        })
      }
    </div>
  )
}
