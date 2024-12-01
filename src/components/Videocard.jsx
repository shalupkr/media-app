import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addHistoryAPI, deleteVideoAPI } from '../../services/allAPI';




function Videocard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);

    
    const {caption,link} = video

    let today = new Date()

    // console.log(new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',
    //   minute:'2-digit',second:'2-digit'}).format(today));

    let timeStamp =new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',
    minute:'2-digit',second:'2-digit'}).format(today)

    let videoHistory = {caption,link,timeStamp}

    await addHistoryAPI(videoHistory)

  }

  const removeVideo = async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }


  const dragStarted=(e,id)=>{
    // console.log("Event Started.....VideoId"+id);
    e.dataTransfer.setData("VideoId",id)
  }

  return (
    <div>
      <Card style={{ width: '18rem',margin:'5px'}} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" src={video.url} onClick={handleShow}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video.caption}</h5>
          {insideCategory?null:<button onClick={()=>removeVideo(video.id)} className='btn'><i class="fa-solid fa-trash-can fa-2xl text-danger"></i></button>}
          </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="470px" height="300px" src={`${video.link}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe></Modal.Body>
      </Modal>
    </div>
  )
}

export default Videocard
