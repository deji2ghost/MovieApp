import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './Home'
import { Header } from './components/Header'
import { SignUpForm } from './components/SignUpForm'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MovieList } from './components/MovieList'
import { SigninForm } from './components/SigninForm'
import { DetailsPage } from './components/DetailsPage'

function App() {
  const [movieList, setMovieList] = useState([])
  const [accounts, setAccounts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [movietype, setMovietype] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])
  const [details, setDetails] = useState([])

  const searchedMovie = movietype.filter(movie => {
    return movie.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  const searchHome = nowPlaying.filter(playing => {
    return playing.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  console.log(searchedMovie)

  const addAccount = (data) => {
    const movieAccount = ([...accounts, data])
    setAccounts(movieAccount)
    localStorage.setItem('movieAccount', JSON.stringify(movieAccount))
  }

  useEffect(() => {
    console.log(accounts)
    const items = localStorage.getItem('movieAccount')
    // console.log(items)
    // console.log(searchValue)

    // setAccounts(JSON.parse(items))
    
  }, [])

  return (
    <div className='bg-slate-400 min-h-screen '>
      <BrowserRouter>
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Routes>
          <Route index element={<Home movieList={movieList} setMovieList={setMovieList} nowPlaying={nowPlaying} setNowPlaying={setNowPlaying} searchHome={searchHome}/>}/>
          <Route path='movie/:type' element={<MovieList setMovietype={setMovietype} movietype={movietype} searchedMovie={searchedMovie}/>}/>
          <Route path='movies/:id' element={<DetailsPage details={details} setDetails={setDetails}/>}/>
          <Route path='movie/signUp' element={<SignUpForm addAccount={addAccount}/>}/>
          <Route path='movie/signin' element={<SigninForm addAccount={addAccount}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
