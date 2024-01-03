import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({review}) {
  console.log(review);

    const [open, setOpen] = useState(false);
  return (
    <>
        <Button onClick={() => setOpen(!open)} className='btn btn-warning ms-4' style={{fontSize:'13px'}}>Click here to see reviews</Button>
            <Collapse in={open}>
                <div className='my-2'>
                    <hr />
                    {review?.length>0?
                    review.map((items)=>(<div className='mt-5'>
                    <h5>Name and date : {items.name} {items.date}</h5>
                    <p>Rating : {items.rating}</p>
                    <p>Description : {items.comments}</p>
                </div>))
                    :<p>Nothing to display</p>}
                </div>
      </Collapse>
    </>
  )
}

export default Restreview
