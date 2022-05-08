import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import AllProduct from "../../components/AllProduct/AllProduct";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import useSupplier from "../../hooks/useSupplier";
const AddProduct = () => {
  const [user] = useAuthState(auth);
  const[suppliers] = useSupplier();
  const[products, setProducts, updateData, setUpdateData] = useProducts();
  const heandleSubmitProducts = (ev) => {
    ev.preventDefault();
    console.log(ev)
    const productName = ev.target.productName.value;
    const productDescription = ev.target.productDescription.value;
    const price = ev.target.productPrice.value;
    const qty = ev.target.productQty.value;
    const supplier = ev.target.supplier.value;
    const imageUrl = ev.target.imageUrl.value;

    let result = {
      productName,
      productDescription,
      price,
      qty,
      supplier,
      imageUrl,
      email:user.email
    };

    if(!productName || productName.trim().length <3){
      toast(" Product name is required")
      return;
    }

    if(!price || price<=0){
      toast(" Product Price is required")
      return;
    }
    if(!qty || qty <= 0){
      toast(" Product Qty is required")
      return;
    }
    if(!imageUrl || imageUrl.trim().length <= 10){
      toast(" Image  is required")
      return;
    }

  

      fetch('https://warm-mesa-46770.herokuapp.com/add-products',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(result)
      }).then(res => res.json())
      .then(data =>{
        console.log(data);
        toast("item success fully added");
        setUpdateData(result);
        ev.target.reset();
      } )
      .catch(err => console.log(err))

 

    console.log("product insertd", result);
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Add Product
              </h5>
              <form onSubmit={heandleSubmitProducts}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    id="floatingInputUsername"
                    placeholder="Product Name"
                    required
                  />
                  <label htmlFor="productName">Product Name</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    name="productDescription"
                    className="form-control"
                    id="floatingInputDescription"
                  ></textarea>
                  <label htmlFor="floatingInputDescription">
                    Product Description
                  </label>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-floating mb-3">
                      <input
                        name="productPrice"
                        type="number"
                        className="form-control"
                        id="floatingPrice"
                        placeholder="price"
                      />
                      <label htmlFor="floatingPrice">Price</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        name="productQty"
                        type="number"
                        className="form-control"
                        id="floatingQty"
                        placeholder="Quantity"
                      />
                      <label htmlFor="floatingQty">Quantity</label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    name="imageUrl"
                    type="text"
                    className="form-control"
                    id="floatingPasswordConfirm"
                    placeholder="image url"
                  />
                  <label htmlFor="floatingPasswordConfirm">ImageUrl</label>
                </div>
                <div className="mb-3">
                  <Form.Select
                    name="supplier"
                    aria-label="Default select example"
                  >
                    <option>Select Supplier Name</option>
                    {suppliers.map(sup =>(<option key={sup.id} value={sup.serviceName}>{sup.serviceName}</option>))}
                  </Form.Select>
                </div>

                <div className="d-grid mb-2 col-6 offset-3">
                  <input value="Add Product"
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                 />
                  
                </div>
              </form>
            </div>
          </div>
        </div>

       
      </div>
    </div>
    <Container fluid>
    <AllProduct></AllProduct>
    </Container>
    </>
  );
};

export default AddProduct;
