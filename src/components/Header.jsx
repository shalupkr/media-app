import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand className="text-danger fw-bolder fs-4">
          <Link to={'/'} style={{textDecoration:"none", color:"red"}}>
          <i class="fa-solid fa-play me-3"></i>
          Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
