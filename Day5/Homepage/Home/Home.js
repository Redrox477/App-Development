import React from 'react'
import './home.css';
// import './animate.css';

function Home() {
  return (
    <div className='home'>
      <p className="animate__animated animate__backInDown" id ="text1">Welcome to</p>
      <div className='text2'>
      <h2 className="animate__animated animate__backInUp" id = "text2">Kitchen Display System</h2>
      </div>
      <form role="search">
        <input class="searchbar" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Home