import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const DetailsPage = (props) => {
    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&page=1`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDJhNTdjNzAzZDM5OWI5ZTIxZmViMGIyNGZlNDY4MSIsInN1YiI6IjY1Y2IzZDBkNWJlMDBlMDE3Y2FkMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsziZ5tUMp7czPlaOXUCSdjcHMElbZ-kw5LsAEqdusY'
          }
        }).then(res => props.setDetails(res.data))
    }, [])

    console.log(props?.details)
    console.log(props?.details?.genres)
  return (
<div>

  {typeof props!=='undefined'?
      <div className='pb-4'>
      <div className='relative mx-auto'>
        <Link 
          to='/'
          className='bg-gray-600 absolute top-4 left-4 rounded-md py-1 w-[20%] text-center z-10 hover:bg-white hover:text-black'
        >Back</Link>
        <img className='w-full h-[500px]' src={`https://image.tmdb.org/t/p/w500/${props.details.backdrop_path}`}/>
        <img className='w-[300px] absolute top-1/2 -translate-y-1/2 left-5' src={`https://image.tmdb.org/t/p/w500/${props.details.poster_path}`}/>
      </div>

      <div className='w-4/5 mx-auto mt-4'>
        <h1 className='text-3xl text-center font-bold'>{props.details.title}({props.details.release_date})</h1>
        {/* <div className='flex'>
          <h1 className='font-bold'>Genre: </h1>
          {
            props.details.genres.map(genre => {
              return(
                <div className='mx-1'>{genre.name}</div>
              )
            })
          }
        </div> */}
        
        <div className='my-3'>
          <p>Popularity: {props.details.popularity}</p>
          <p>Vote Average: {props.details.vote_count}</p>
          <p>Vote Count: {props.details.vote_count}</p>
        </div>

        <i>{props.details.tagline}</i>
        
        <div className='my-2'>
          <h3 className='font-bold'>OVERVIEW</h3>
          <p>{props.details.overview}</p>
        </div>
      </div>
  </div>:'loading...'
  }
</div>
  )
}
