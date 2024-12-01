import React, { useEffect, useState } from 'react'
import {Button, Card, Col, FloatingLabel, Form, Modal, Row} from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import Videocard from './Videocard';




function Category(dropVideoResponse) {

  const [CategoryName,setCategoryName]=useState("")

  const [allCategories,setAllCategories]=useState([])
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd =async() =>{
    if(CategoryName){
      const result =await addCategoryAPI({CategoryName,allVideos:[]})
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
      
    }else{
      alert("Please add a category name")
    }
  }

  const getCategories=async()=>{
    const {data}= await getCategoryAPI()
    setAllCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

// console.log(allCategories);

const removeCategory =async(id)=>{
      await deleteCategoryAPI(id)
      getCategories()
}

const dragOver=(e)=>{
  console.log("Video card dragging over the category");
  e.preventDefault()
}

const VideoDropped=async(e,categoryId)=>{
  const VideoId=e.dataTransfer.getData("VideoId")
  console.log("Video Id"+VideoId +"Video Dropped category Id"+categoryId);
  const {data} = await getAVideoAPI(VideoId)
  // console.log(data);
  const selectedCategory=allCategories.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  // // console.log(selectedCategory);
  await updateCategoryAPI(categoryId,selectedCategory)
  getCategories()
  
  
  
}

const videoDragStarted =(e,VideoId,categoryId)=>{
  let datashare = {VideoId,categoryId }
  e.dataTransfer.setData("data",JSON.stringify(datashare))
}


  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info fs-5 fw-bolder'>Add Category</button>
      </div>

      {
        allCategories?.length>0?allCategories.map(Category=>(
          <div className="border rounded mt-5 p-3" droppable="true" onDragOver={(e)=>dragOver(e)}  onDrop={e=>VideoDropped(e,Category.id)}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>{Category.CategoryName}</h5>
          <button onClick={()=>removeCategory(Category.id)} className='btn'><i class="fa-solid fa-trash-can fa-2xl text-danger"></i></button>
        </div>
        <Row>
          {
            Category?.allVideos?.length>0?Category?.allVideos.map(items=>(
            <Col sm={12} draggable onDragStart={e=>videoDragStarted(e,Card.id,Category.id)}>
              <Videocard video={items} insideCategory={true}/>
            </Col>)):<p>null</p>
          }
        </Row>
      </div>)):<p className='fw-bolder text-danger'>Nothing to Display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <FloatingLabel controlId="floatingPassword" label="Category">
        <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)} />
      </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
