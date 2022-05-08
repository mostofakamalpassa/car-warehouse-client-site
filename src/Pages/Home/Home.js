import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleItem from "../../components/SingleItem/SingleItem";
import Supplier from "../../components/Supplier/Supplier";
import useProducts from "../../hooks/useProducts";
import useSupplier from "../../hooks/useSupplier";
import Banner from "./Banner/Banner";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
    const[products] = useProducts();
    const[suppliers] = useSupplier();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
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

      <Container>
      <h3 className="text-center bg-success py-3 text-light">Supplier information</h3>
      <Row xs={1} md={1} className="g-4 mb-5">
        <Slider {...settings}>
        {suppliers.slice(0,15).map(sup =>  <Supplier supplier={sup} key={sup.id}></Supplier>)}
        </Slider>
          
         
       
        </Row>
      </Container>
    </div>
  );
};

export default Home;
