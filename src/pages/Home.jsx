import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchrestaurant } from '../redux/restaurantSlice'

function Home() {

  const allRest=useSelector((state)=>state.restaurantSlice.allRestaurant)
  console.log(allRest);
  
  const dispatch=useDispatch()

  useEffect(()=>
  {
    dispatch(fetchrestaurant())
  },[])

  return (
    <Row>
      {allRest?.length>0?
      allRest.map((item)=>(
        <Col className='px-5 py-3' sm={6} md={4}>
        <Restcard items={item}/>
      </Col>
      ))
     :
      <p className='text-danger fw-bolder'>No restaurant available</p>}
      
    </Row>
  )
}

export default Home
