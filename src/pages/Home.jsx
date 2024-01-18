import React from 'react'
import Navbar from "../components/Navbar";
import SearchBg from '../components/SearchBg';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="mt-20">
          <SearchBg />
        </div>
    </div>
  )
}

export default Home