import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Binding__3_-removebg-preview.png'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';


function Header() {
  const dispatch=useDispatch()
  return (
    <Navbar variant='dark'>
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="80"
          height="80"
          className="d-inline-block align-top me-5"
        />{' '}
<h5 style={{marginTop:'-50px',marginLeft:'80px'}}>
          <span className='text-warning'>Binding</span>Bites
  
</h5>      </Navbar.Brand>

<Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              onChange={(e)=>dispatch(search(e.target.value))}
              placeholder="Search by neighborhood"
              className=" mr-sm-2 w-200"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  </Navbar>
  )
}

export default Header
