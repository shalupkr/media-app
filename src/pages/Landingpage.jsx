import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <>
      <Row className="mt-5 align-items-center jutify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:"40px"}}>Welcome to<span className='text-warning'>Media-player</span></h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro doloribus excepturi molestiae nulla fugiat. Qui, sit voluptatibus aliquid deserunt magnam provident reprehenderit omnis error amet cumque atque itaque similique ea?
          Perferendis vitae quisquam maiores! Laborum fugiat explicabo provident quas labore, beatae hic dicta quisquam a inventore perferendis officia. Dolor, quas harum ipsam fugiat reprehenderit consequatur minima rerum consequuntur aliquam in.
          Excepturi, dolore qui aspernatur earum facere, pariatur ratione error quas repellendus inventore cumque aliquid facilis quasi sit repudiandae magnam, iste temporibus est! Sint nostrum sapiente illum saepe officia, vitae alias!</p>
          <button onClick={()=>navigateByUrl("/home")} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img className='ms-5' height="350px" src="https://media.tenor.com/lhlDEs5fNNEAAAAM/music-beat.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
          <Card style={{width:"22rem"}} className='p-4 bg-info'>
            <Card.Img variant='top' height={"300px"} width={"300px"} src="https://i.gifer.com/origin/ec/ec2cc02c120bfe9b02029b4a5506eae9_w200.gif"/>
            <Card.Body>
              <Card.Title className='text-primary'>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card style={{width:"22rem"}} className='p-4 bg-info'>
            <Card.Img variant='top' height={"300px"} width={"300px"} src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif"/>
            <Card.Body>
              <Card.Title className='text-primary'>Categorised Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{width:"22rem"}} className='p-4 bg-info'>
            <Card.Img variant='top' height={"300px"} width={"300px"} src="https://media.tenor.com/r7LADqyXxkcAAAAM/music.gif"/>
            <Card.Body>
              <Card.Title className='text-primary'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    <div className="container border rounded p-5 border-dark mb-5 d-flex align-items-center justify-content-between w-100">  
      <div className='col-lg-5'>
        <h4 className='text-warning'>Simple,Powerful & Fast</h4>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et deserunt harum vero suscipit quidem eius accusamus ratione, fugit, soluta cupiditate rem? Eligendi fuga provident non illum ea molestiae odit.
        Ipsam quis ratione natus rerum autem exercitationem ducimus veritatis perferendis dolorem? Ad saepe iure iusto ut quod in minima, eligendi ratione reiciendis eum provident voluptas fuga consequatur mollitia non distinctio.
        Sequi quis ducimus eaque dolore repellendus ab modi est, eligendi aliquam error temporibus sapiente impedit natus quidem non doloribus adipisci. Reprehenderit qui nemo ab voluptates tempore. Vero voluptates sunt optio.
        </h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et deserunt harum vero suscipit quidem eius accusamus ratione, fugit, soluta cupiditate rem? Eligendi fuga provident non illum ea molestiae odit.
        Ipsam quis ratione natus rerum autem exercitationem ducimus veritatis perferendis dolorem? Ad saepe iure iusto ut quod in minima, eligendi ratione reiciendis eum provident voluptas fuga consequatur mollitia non distinctio.
        Sequi quis ducimus eaque dolore repellendus ab modi est, eligendi aliquam error temporibus sapiente impedit natus quidem non doloribus adipisci. Reprehenderit qui nemo ab voluptates tempore. Vero voluptates sunt optio.
        </h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et deserunt harum vero suscipit quidem eius accusamus ratione, fugit, soluta cupiditate rem? Eligendi fuga provident non illum ea molestiae odit.
        Ipsam quis ratione natus rerum autem exercitationem ducimus veritatis perferendis dolorem? Ad saepe iure iusto ut quod in minima, eligendi ratione reiciendis eum provident voluptas fuga consequatur mollitia non distinctio.
        Sequi quis ducimus eaque dolore repellendus ab modi est, eligendi aliquam error temporibus sapiente impedit natus quidem non doloribus adipisci. Reprehenderit qui nemo ab voluptates tempore. Vero voluptates sunt optio.
        </h6>
      </div>
      <div className="video col-lg-5">
      <iframe width="100%" height="240px" src="https://www.youtube.com/embed/18cpx0zI6SY?si=lMdGZxzCKU8EF5Vf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
    </>
  )
}

export default Landingpage
