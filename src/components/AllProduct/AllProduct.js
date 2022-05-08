import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FaTrash, FaPenSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";

const AllProduct = () => {
  const [products, setProducts] = useProducts();
  // const[item, setItem] = useState({});
  const deleteConfirmAlert = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui bg-success p-5 text-light">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button className="btn btn-md btn-primary" onClick={onClose}>No</button>
            <button
              onClick={() => {
                handleDelete(id);
                onClose();
              }}
              className="btn btn-md btn-danger ms-4"
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
  };


  const handleDelete = id =>{

    console.log('delete id = ', id);
    fetch(`https://warm-mesa-46770.herokuapp.com/product/${id}`,{
      method:'DELETE'
    }).then(res => res.json())
    .then(data => {
      console.log(data);

      const result = products.filter(pro => pro?._id !== id);

    //  console.log('delete Id', result);
      setProducts(result);
    }
      
     
      
      );
  }

  const hendleDelvered = (id)=>{
 
   
   const filterItem =  products.filter(pro => pro._id === id);
    const item = filterItem;
  //  setItem(filterItem);
   //console.log("filterItem", filterItem);
   //console.log('iii',item[0]);
    if(item[0]?.qty < 1 ){
       alert("item Quantity is not enough");

       return;
    }
    fetch(`https://warm-mesa-46770.herokuapp.com/item-delivered/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item[0]),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
       // setItem(data);
        toast("item delivered");
         

      }
      )
      .catch((err) => console.log(err));

    
  }

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
          <th>Image</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Qty</th>

            <th>Supplier</th>
        
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(pro=>(
              <tr key={pro._id}>
              <td style={{width:'150px'}}> <img className="img-thumbnail w-100" src={pro.imageUrl} alt={pro.productName}/></td>
              <td width="250">{pro.productName}</td>
              <td width="500">{pro.productDescription}</td>
              <td>{pro.price}</td>
              <td>{pro.qty}</td>
              <td>{pro.supplier}</td>
              <td>
                <Button className="btn btn-sm" onClick={()=>hendleDelvered(pro?._id)}>Delivered</Button>
                <Link to={`/restock/${pro._id}`}>
                  <Button className="btn btn-sm mx-2">
                    ReStock
                  </Button>
                </Link>
                <Link to={`/inventory/${pro._id}`}>
                  <FaPenSquare className="fs-2">
                  </FaPenSquare>
                </Link>


               || <FaTrash  role="button" className="text-danger fs-2"  onClick={()=> deleteConfirmAlert(pro._id)}></FaTrash></td>
            </tr>
            ))
          }
          
        </tbody>
      </Table>
     
     
    </div>
  );
};

export default AllProduct;
