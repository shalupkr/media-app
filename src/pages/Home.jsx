import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const[uploadVideoResponse,setUploadVedioResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-vedios">
          <Add setUploadVedioResponse={setUploadVedioResponse}/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}}>Watch History <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-vedios col-lg-9">
          <h1>All Vedios</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
        </div>
        <div className="all-vedios col-lg-3">
      <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>

    </> 
  )
}

export default Home
