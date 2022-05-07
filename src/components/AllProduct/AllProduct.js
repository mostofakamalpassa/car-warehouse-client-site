import React from "react";
import { Table } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FaTrash, FaPenSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const AllProduct = () => {
  const [products, setProducts] = useProducts();

  const submit2 = (id) => {
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
    fetch(`http://localhost:5000/product/${id}`,{
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

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(pro=>(
              <tr key={pro._id}>
              <td>{pro.imageUrl}</td>
              <td>{pro.productName}</td>
              <td>{pro.productDescription}</td>
              <td>{pro.price}</td>
              <td>{pro.qty}</td>
              <td>{pro.supplier}</td>
              <td>
                <Link to={`/inventory/${pro._id}`}>
                  <FaPenSquare>
                  </FaPenSquare>
                </Link>
               || <FaTrash className="text-danger"  onClick={()=> submit2(pro._id)}></FaTrash></td>
            </tr>
            ))
          }
          
        </tbody>
      </Table>
     
     
    </div>
  );
};

export default AllProduct;
