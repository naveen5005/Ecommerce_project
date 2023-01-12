import React, { useEffect, useState } from "react";

const Cart = () => {
  const [priceitems,setpriceitems]=useState([41,121,90])
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllUsers();
   
  }, []);
  const [result, setresult] = useState("");
  const getAllUsers =() => {
      fetch("http://localhost:5050/cart").then((res)=>{
      return res.json();
    }).then((response)=>{
      setProducts(response);
    })
    setTimeout(() => {
      console.log(myprice())
          }, 10000);
       
  

  };
  const myprice=()=>{
    var prices=[...priceitems]
    products.map((price)=>{
prices.push(price.price)

// console.log(prices)


    } )
    setpriceitems(prices)
  }

  const handleDelete = (id) => {
    fetch("http://localhost:5050/cart/" + id, {
      method: "DELETE",
    }).then(() => {
      getAllUsers();
    });
  };
  return (
    <div className="pricelist container">
      <div className="row">
        <div className="col-7">
          <table className="table">
            <thead>
              <tr>
                <th>ProductImage</th>
                <th>ProductName</th>
                <th>ProductPrice</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((carts, i) => (
                <tr key={i}>
                  <td>
                    <img src={carts.thumbnail} style={{ width: "150px" }} />
                  </td>
                  <td>{carts.title}</td>
                  <td>{carts.price}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleDelete(carts.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
     
        <div className="col-4 ">
        <div className="border p-4">
          <div class="card-header fs-3">Price Details</div>
          <hr/>
          <div class="card-body">
            {/* <ul>
              <li>Price items</li>
              <li>Delivery Charges</li>
              <li>Discount</li>
              <li>Secured packaging Free</li>
            </ul> */}
            <p>PriceItems :*3items{" "}{" "}{" "}300$</p>

            <p>Delivery Charges</p>
            <p>Discount</p>
            <p>Secured packaging Free</p>
            <hr />
            {priceitems && priceitems.map((pri,i)=> <h1>{pri}</h1>)}

          
            <h2>TotalAmount</h2>
            <hr />
            <div class="card-footer text-muted text-center">
              <button className="btn btn-warning" onClick = {myprice}> PLaceOrder</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Cart;
