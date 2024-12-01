import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allAPI'


function WatchHistory() {
  const[history,setHistory]=useState([])

  useEffect(()=>{
    getHistory() 
  },[])

  const getHistory= async()=>{
    const result= await getHistoryAPI()
    console.log(result);
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("api Failed");
      console.log(result.message);
      
      
    }
    
  }

  // console.log(history);

  const removeHistory=async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
    <div>
      <h1>History</h1>
    </div>
    <div className="container d-flex mt-5 mb-5 w-100 justify-content-between">
      <h1 style={{color:"blueviolet",fontSize:"40px"}}>Watch-History</h1>
      <Link to={'/home'} style={{textDecoration:'none',color:'blueviolet',fontSize:'25px'}}>Back To Home<i class="fa-solid fa-rotate-left fa-xl" style={{color: 'blueviolet',marginLeft:'10px'}}></i></Link>
    </div>
    <table className='table mb-5 container shadow w-100'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          history?.length>0?history.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video.caption}</td>
          <td><a href="{video.link}" target='_blank'>{video.link}</a></td>
          <td>{video.timeStamp}</td>
          <td><button onClick={()=>removeHistory(video.id)} className='btn'><i class="fa-solid fa-trash-can fa-2xl text-danger"></i></button></td>
        </tr>)):<p className='text-danger'>nothing to display</p>
        }
      </tbody>
    </table>
    </> 
  )
}

export default WatchHistory
