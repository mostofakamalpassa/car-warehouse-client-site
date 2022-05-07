import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleItem = (props) => {
    console.log(props);
    const {productName, price, qty, imageUrl,supplier,productDescription,_id} = props.product;
    return (
          <Col>
            <Card className="shadow-lg" style={{"borderTop":"5px solid red"}}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title className='bg-dark p-2 text-info'>{productName}</Card.Title>
                <Card.Text>
                 {productDescription}
                </Card.Text>
                <Card.Subtitle >Price = {price}$ <span>Qty = {qty}</span></Card.Subtitle>
                <Card.Subtitle className="pt-2">Supplier = {supplier}</Card.Subtitle>
                <Button className='mt-3 mx-auto w-100 fw-bold'><Link to={`/inventory/${_id}`} className='text-light text-decoration-none'>Update</Link></Button>
              </Card.Body>
            </Card>
          </Col> 
    );
};

export default SingleItem;