import React from 'react';
import { Form } from 'react-bootstrap';
import AllProduct from '../../components/AllProduct/AllProduct';

const AddProduct = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Add Product</h5>
                <form>
    
                  <div className="form-floating mb-3">
                    <input type="text" name="productName" className="form-control" id="floatingInputUsername" placeholder="Product Name" required />
                    <label htmlFor="productName">Product Name</label>
                  </div>
    
                  <div className="form-floating mb-3">
                    <textarea type="text" name="productDescription" className="form-control" id="floatingInputDescription" > </textarea>
                    <label htmlFor="floatingInputDescription">Product Description</label>
                  </div>
    
    
                  <div className="form-floating mb-3">
                    <input name="productPrice" type="number" className="form-control" id="floatingPrice" placeholder="price"/>
                    <label htmlFor="floatingPrice">Price</label>
                  </div>
    
                  <div className="form-floating mb-3">
                    <input name="imageUrl" type="text" className="form-control" id="floatingPasswordConfirm" placeholder="image url"/>
                    <label htmlFor="floatingPasswordConfirm">ImageUrl</label>
                  </div>
                  <div className='mb-3'>
                    
                  <Form.Select aria-label="Default select example">
  <option>Select Supplier Name</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
                    
                  </div>
    
                  <div className="d-grid mb-2 col-6 offset-3">
                    <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Add Product</button>
                  </div>

                </form>
              </div>
            </div>
          </div>

          <AllProduct></AllProduct>
        </div>


      </div>
      
    );
};

export default AddProduct;