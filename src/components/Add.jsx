import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { uploadVideoAPI } from '../../services/allAPI';





function Add({setUploadVedioResponse}) {
    
  const [uploadVideo,setUploadVideo]=useState({
    id:"",
    caption:"",
    url:"",
    link:""
  })

  // console.log(uploadVideo);
  

  const getYoutubeLink=(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      const vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
      
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }


  const handleAdd =async()=>{
    const{id,caption,url,link}=uploadVideo


    if(!id || !caption || !url || !link){
      alert("Please fill all the fields")
    }else{
      // store video details  to the json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);

      if(result.status>=200&&result.status<=300){
        //success
        handleClose()
        alert("Uploaded Successfully")
        // after getting success message field should set to be empty
        setUploadVideo({
          id:"",
          caption:"",
          url:"",
          link:""
        })
        setUploadVedioResponse(result.data)
      }else{
        console.log(result.message);
      }
      
    }
  }
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <h5 style={{color:"blueviolet"}}>Upload Vedios</h5>
        <Button onClick={handleShow} className='btn btn-light'><i className="fa-solid fa-arrow-up-from-bracket fa-bounce fa-2xl mb-2"></i></Button>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...
          uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTitle" label="Video Title" className='mb-3'>
        <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...
          uploadVideo,caption:e.target.value})} />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingImageUrl"
        label="Image Url"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image Url" onChange={(e)=>setUploadVideo({...
          uploadVideo,url:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingVideoUrl" label="Video Url">
        <Form.Control type="text" placeholder="Video Url" onChange={getYoutubeLink}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
