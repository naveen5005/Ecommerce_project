import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      getAllUsers();
     
    }, []);
    const[result,setresult]=useState("")
    const getAllUsers = async () => {
        let response = await (await fetch("http://localhost:5050/cart")).json();
        // console.log(response);
        setProducts(response);
      };
      const  handleDelete=(id)=>{
        fetch("http://localhost:5050/cart/"+id,{
            method:"DELETE"
        }).then(()=>{
            getAllUsers();
            

        })
      
        

      }
  return (
    <div className='container'>
  <table className='table'>
  <thead>
    <tr>
        <th>ProductImage</th>
        <th>ProductName</th>
        <th>ProductPrice</th>
        <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {products.map((carts,i)=> <tr key={i}>
        <td><img src={carts.thumbnail} style={{width:"150px"}}/></td>
        <td>{carts.title}</td>
        <td>{carts.price}</td>
        <td><button type='button' onClick={()=>{handleDelete(carts.id)}} className="btn btn-danger">Delete</button></td>
    </tr>)}
  </tbody>

  </table>

    </div>
  )
}

export default Cart