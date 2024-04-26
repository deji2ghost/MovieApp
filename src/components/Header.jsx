import { faBars, faClose, faFilm, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    const [clicked, setClicked] = useState(true)

    const handleClick = () => {
        if(clicked){
            setClicked(!clicked)
            document.body.style.overflowY = 'hidden'
        }else{
            setClicked(!clicked) 
            document.body.style.overflowY = 'visible'
        }
    }

  return (
    <header className='flex justify-between bg-zinc-200 items-center'>
        <FontAwesomeIcon icon={faFilm} className='cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2'/>

        <form className='relative'>
            <input type='text' value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)}/>
            <FontAwesomeIcon className='absolute right-1 top-1/2 -translate-y-1/2' icon={faSearch}/>
        </form>
        
        <div 
            onClick={handleClick} 
            className='cursor-pointer px-2 md:hidden'
        >{clicked ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faClose}/>}</div>

        <div onClick={handleClick} className={`absolute ${!clicked ? 'flex' : 'hidden'} z-10 cursor-pointer bg-slate-400 bg-opacity-70 top-10 left-0 w-full h-screen md:hidden`}></div>
        <div 
            className={`absolute ${!clicked ? 'block' : 'hidden'} flex flex-col bg-zinc-200 z-20 top-10 right-0 h-screen px-2 w-4/12`}
        >
            <Link to='/' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Home</Link>
            <Link to='/movie/popular' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Popular</Link>
            <Link to='/movie/upcoming' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Upcoming</Link>
            <Link to='/movie/top_rated' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Top-Rated</Link>
            <Link to='/movie/signUp' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Sign Up</Link>
            <Link to='movie/signin' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Sign In</Link>
        </div>

        <div 
            className='hidden md:flex px-2'
        >
            <Link to='/' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Home</Link>
            <Link to='/movie/popular' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Popular</Link>
            <Link to='/movie/upcoming' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Upcoming</Link>
            <Link to='/movie/top_rated' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Top-Rated</Link>
            <Link to='/movie/signUp' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Sign Up</Link>
            <Link to='movie/signin' className='mx-1 cursor-pointer hover:bg-blue-600 hover:text-gray-600 py-3 px-2 rounded-sm'>Sign In</Link>
        </div>
    </header>
  )
}