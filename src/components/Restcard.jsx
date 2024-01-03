import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restcard({items}) {
  return (
   <Link to={`/restaurant-view/${items.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '18rem',fontSize:'15px' }}>
        <Card.Img variant="top" src={items.photograph} style={{height:'200px'}}/>
        <Card.Body>
          <Card.Title className='text-center text-warning'>{items.name}</Card.Title>
          <hr />
          <Row className='p-3'>
              <Col>
                  <Card.Text>
                    {items.cuisine_type}
                  </Card.Text>
              </Col>
              <Col className='ms-3'>
                  <Card.Text>
                    {items.neighborhood}
                  </Card.Text>
              </Col>
          </Row>
        </Card.Body>
      </Card>
   </Link>
  )
}

export default Restcard
