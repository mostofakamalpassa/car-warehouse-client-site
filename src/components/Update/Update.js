import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Form, } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  // Load data
  useEffect(() => {
    const url = `http://localhost:5000/singleItem/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleUpdateItem = (ev) => {
    ev.preventDefault();
    console.log(ev);
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
    };

    if (!productName || productName.trim().length < 3) {
      toast(" Product name is required");
      return;
    }

    if (!price || price <= 0) {
      toast(" Product Price is required");
      return;
    }
    if (!qty || qty <= 0) {
      toast(" Product Qty is required");
      return;
    }
    if (!imageUrl || imageUrl.trim().length <= 10) {
      toast(" Image  is required");
      return;
    }

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
        toast("Item update");
      }
      )
      .catch((err) => console.log(err));

    console.log("product Update", result);
  };

  const hendleDelvered = (ev)=>{

    console.log(item);
    if(item.qty < 1){
       alert("item Quantity is not enough");

       return;
    }
    fetch(`http://localhost:5000/item-delivered/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)
        toast("item delivered");
         //setItem(data);

      }
      )
      .catch((err) => console.log(err));

    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Update Product
              </h5>
              <form onSubmit={handleUpdateItem}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    id="floatingInputUsername"
                    placeholder="Product Name"
                    defaultValue={item?.productName}
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
                    defaultValue={item?.productDescription}
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
                        defaultValue={item.price}
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
                        defaultValue={item?.qty}
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
                    defaultValue={item?.imageUrl}
                  />
                  <label htmlFor="floatingPasswordConfirm">ImageUrl</label>
                </div>
                <div className="mb-3">
                  <Form.Select
                    name="supplier"
                    aria-label="Default select example"
                    defaultValue={item?.supplier}
                  >
                    <option>Select Supplier Name</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>

                <div className="d-grid mb-2 col-6">
                  <input
                    value="Update Item"
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                  />
                  </div>
                <div className="d-grid mb-2 col-6">
                  <input
                    value="Delivered" onClick={hendleDelvered}
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="button"
                  />
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
