import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleItem from "../../components/SingleItem/SingleItem";
import useProducts from "../../hooks/useProducts";
import Banner from "./Banner/Banner";

const Home = () => {
    const[products] = useProducts();
  return (
    <div>
      <Banner></Banner>

      {/* inventory card show hear */}
      <Container className="my-4">
        <h3 className="text-center bg-success py-3 text-light">Inventory Items</h3>
       <Row xs={1} md={3} className="g-4">
           {products.slice(0,6).map(product =>  <SingleItem product={product} key={product._id}></SingleItem>)}
         
       
        </Row>
        <Row>
        <Col className="col-sm-2 offset-sm-5 my-5">
        <Button className="py-3">
           <Link className="text-light text-decoration-none" to='/inventory'>Manage Inventory</Link>
         </Button> 
        </Col> 
        </Row>
     
      </Container>
    </div>
  );
};

export default Home;
