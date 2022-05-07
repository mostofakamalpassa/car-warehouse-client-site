import React from "react";
import { Carousel } from "react-bootstrap";
import useProducts from "../../../hooks/useProducts";

const Banner = () => {
  const [products] = useProducts();
  return (
    <Carousel className="container">
   {
     products.slice(0,6).map(pro =>(
      <Carousel.Item key={pro._id}>
      <img
        className="d-block w-100"
        src={pro.imageUrl}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>{pro.productName}</h3>
        <p>{pro?.productDescription.slice(0,50)}</p>
      </Carousel.Caption>
    </Carousel.Item>


     ))
   }
    {/* <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>
      
   
  );
};

export default Banner;
