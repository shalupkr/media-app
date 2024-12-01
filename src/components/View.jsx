import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAlluploadVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  const[allVideos,setAllVideos]=useState([])

  useEffect(()=>{
    getAlluploadVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse]) 

const getAlluploadVideos=async()=>{
  const result=await getAlluploadVideoAPI()
  // console.log(result);
  if(result.status==200){
    setAllVideos(result.data)
  }else{
    setAllVideos([])
    console.log("API Failed");
  }

  
}

const VideodragOver=(e)=>{
  e.preventDefault()
  } 


const VideoDrop= async(e)=>{
  const {VideoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  // console.log(VideoId,categoryId);
  // console.log(VideoId);
  const {data} = await getCategoryAPI()
  console.log(data);
  const selectedCategory = data.find(item=>item.id==categoryId)
  let result = selectedCategory.allVideos.filter(video=>video.id!==VideoId)
  console.log(result);
  let {id,CategoryName}=selectedCategory
  let newCategory={id,CategoryName,allVideos:result}
  console.log(newCategory);
  const  res = await updateCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)
}

// console.log(allVideos);
  

  return (
    <>
      <Row droppable="true" onDragOver={(e)=>VideodragOver(e)}  onDrop={e=>VideoDrop(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4}>
        <Videocard video={video} setDeleteVideoResponse={setDeleteVideoResponse} /></Col>)):<p>nothing to display</p>
        }
      </Row>
    </>
  )
}

export default View
