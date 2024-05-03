import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Home = (props) => {
  const [slide, setSlide] = useState(1)
  console.log(props.searchHome)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDJhNTdjNzAzZDM5OWI5ZTIxZmViMGIyNGZlNDY4MSIsInN1YiI6IjY1Y2IzZDBkNWJlMDBlMDE3Y2FkMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsziZ5tUMp7czPlaOXUCSdjcHMElbZ-kw5LsAEqdusY'
      }
    }).then(res => props.setNowPlaying(res.data.results))
  }, [])
    
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDJhNTdjNzAzZDM5OWI5ZTIxZmViMGIyNGZlNDY4MSIsInN1YiI6IjY1Y2IzZDBkNWJlMDBlMDE3Y2FkMDRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsziZ5tUMp7czPlaOXUCSdjcHMElbZ-kw5LsAEqdusY'
      }
    })
      .then(res => 
        props.setMovieList(res.data.results.slice(15)),
        // console.log(res.data.results.slice(10))
      )
      // .then(data => 
      //   setMovieList(data.results),
        // setMovieList(data.results)
      // )
  }, [])

  // console.log(movieList)

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("Called", slide)
  //     nextSlide()
  //   }, 2000)
  // }, [])

  const nextSlide = () => {
    if(slide !== props.movieList.length){
      console.log('still going', props.movieList.length)

      // setSlide(slide + 1) // async
      setSlide(v =>  v + 1) // syncronus function
    }else if(slide === props.movieList.length){
      console.log('just one')
      setSlide(1)
    }
    console.log('clicked')
  }

  const prevSlide = () => {
    if(slide !== 1){
      setSlide(slide - 1)
    }else if(slide === 1 ){
      setSlide(props.movieList.length)
    }
    console.log('clicked')
  }

  return (
    <div className='h-screen'>
      <div className='relative mx-auto h-60'>
        {
          props.movieList.map((movie, index) => {
            return(
              <div key={movie.index} className={`${slide === index + 1 ? 'relative' : 'hidden'} h-full`}>
                <img className='h-full w-full' src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                <div className='absolute bottom-1 text-green-700'>
                  <div>{movie.title}</div>
                </div>
              </div>
            )
          })
        }

        <FontAwesomeIcon onClick={prevSlide} className='absolute left-1 top-1/2 text-red-700' icon={faArrowLeft} />
        <FontAwesomeIcon onClick={nextSlide} className='absolute right-1 top-1/2 text-red-700' icon={faTruckArrowRight} />
      </div>
      <div className='cursor-pointer grid grid-cols-4 mx-auto justify-evenly'>
      {
        props.searchHome.map(movie => {
          return(
            <Link to={`/movies/${movie.id}`} key={movie.id} className='relative rounded-xl'>
              <img className='rounded-xl' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              <div className='absolute bottom-1'>
                <h1 className='font-bold text-xl text-red-800'>{movie.title}</h1>
              </div>
            </Link>
          )
        })
      }
    </div>
    </div>
  )
}
