import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleItem = (props) => {
  //  console.log(props);
    const {productName, price, qty, imageUrl,supplier,productDescription,_id} = props.product;
    return (
          <Col>
            <Card className="shadow-lg" style={{"borderTop":"5px solid red"}}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title className='bg-dark p-2 text-info rounded'>{productName}</Card.Title>
                <Card.Text className='my-3 fs-6'>
                 {productDescription}
                </Card.Text>
                <Card.Subtitle className='d-flex justify-content-between' >
                  <h6>Price = {price}$</h6>
                 <h6 className='bg-success rounded text-light  px-2 py-1'>Qty = {qty} <sup>pc</sup></h6>
                </Card.Subtitle>
                <Card.Subtitle className="py-2">Supplier = {supplier}</Card.Subtitle>
                <Button className='mt-3 mx-auto w-100 fw-bold'><Link to={`/inventory/${_id}`} className='text-light text-decoration-none'>Update</Link></Button>
              </Card.Body>
            </Card>
          </Col> 
    );
};

export default SingleItem;