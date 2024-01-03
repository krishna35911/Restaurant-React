import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import Restreview from '../components/Restreview';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Restview() {
  const [show, setShow] = useState(false);
  const {id}=useParams()
  console.log(id);

  const restaurant=useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(restaurant);
  const selectedrestaurant=restaurant.find(item=> item.id==id)
  console.log(selectedrestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);

  return (
    <Row className='mt-3 mb-5'>
      <Col md={1}></Col>
      <Col md={3} className='ms-3 mt-3'>
        <img src={selectedrestaurant.photograph} style={{height:'90%',width:'100%'}}></img>
      </Col>
      <Col md={7} className='px-5'>
        <hr />
          <h5 className='text-center' style={{fontSize:'25px'}}>
            <span className='text-warning' >RESTAURANT</span>  DETAILS
          </h5>
          <hr />
          <div>
            <ListGroup>
              <ListGroup.Item className='text-center p-4 fs-4'>{selectedrestaurant.name}</ListGroup.Item>
              <ListGroup.Item>Neighbourhood : {selectedrestaurant.neighborhood} </ListGroup.Item>
              <ListGroup.Item>Cuisine-Type : {selectedrestaurant.cuisine_type} </ListGroup.Item>
              <ListGroup.Item>Address : {selectedrestaurant.address} </ListGroup.Item>

              <ListGroup.Item className='text-center p-4'>
                <div className=' justify-content-center align-items-center'>
                  <Button onClick={handleShow} className='btn btn-warning' style={{fontSize:'13px'}}>Opening Hours</Button>
                  <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Opening Hours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ListGroup style={{fontSize:'14px'}}>
                      <ListGroup.Item>Monday - Friday : 9.30am - 5.45pm</ListGroup.Item>
                      <ListGroup.Item>Saturday : 10.30am - 7pm</ListGroup.Item>
                      <ListGroup.Item>Sunday : 11am - 6pm</ListGroup.Item>
                    </ListGroup>
          </Modal.Body>
        </Modal>
                  <Restreview review={selectedrestaurant.reviews}/>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
      </Col>
      <Col md={1}></Col>
      <hr />
    </Row>
  )
}

export default Restview
