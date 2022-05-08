import React, { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReStock = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    // Load data
    useEffect(() => {
      const url = `https://warm-mesa-46770.herokuapp.com/singleItem/${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItem(data));
    }, []);
  
    const handleUpdateItem = (ev) => {
      ev.preventDefault();
    

      const qty = ev.target.productQty.value;
  
  
      let result = {
       
        qty
        
      };

      if (!qty || qty <= 0) {
        toast(" Product Qty is required");
        return;
      }
   
  
      fetch(`https://warm-mesa-46770.herokuapp.com/restock/${id}`, {
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
  
  

    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    Restock 
                  </h5>
                  <form onSubmit={handleUpdateItem}>

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
                    
                    <div className="row">
                    <div className="d-grid mb-2 col-5 mt-3">
                      <input
                        value="ReStock Item"
                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                        type="submit"
                      />
                      </div>

                      <div className="d-grid mb-2 col-5 mt-3">
                      <Link to='/inventory'>inventory</Link>
                      </div>
                      </div>
                    
                   
                  </form>
    
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ReStock;