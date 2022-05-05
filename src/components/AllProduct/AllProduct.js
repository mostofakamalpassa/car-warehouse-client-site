import React from "react";
import { Table } from "react-bootstrap";
import { FaTrash, FaPenSquare } from 'react-icons/fa';
import useProducts from "../../hooks/useProducts";

const AllProduct = () => {
  const [products] = useProducts();

  const handleDelete = id =>{

    console.log('delete id = ', id);
    fetch(`http://localhost:5000/product/${id}`,{
      method:'DELETE'
    }).then(res => res.json())
    .then(data => console.log(data));
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
              <td>{pro._id}</td>
              <td>{pro.productName}</td>
              <td>{pro.ProductDescription}</td>
              <td>{pro.Price}</td>
              <td>{pro.qty}</td>
              <td>{pro.supplier}</td>
              <td><FaPenSquare></FaPenSquare>|| <FaTrash className="text-danger"  onClick={()=> handleDelete(pro._id)}></FaTrash></td>
            </tr>
            ))
          }
          
        </tbody>
      </Table>
     
     
    </div>
  );
};

export default AllProduct;
