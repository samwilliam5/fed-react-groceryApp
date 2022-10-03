// import { useState } from "react";
import { useContext, useState } from "react";
import AddContext from "../Usecontext/Usecontext";
import CartDetails from "./cartdetails";

function Addtocart() {
   const cartitem = useContext(AddContext);
//    const totalprice = 0;
   const [total, setTotal] = useState(0);

   const addTotal = (data)=>{
    setTotal(data+total);
   }
   const minusTotal = (data)=>{
    setTotal(total-data);
   }

   console.log(cartitem.cart);

//    cartitem.cart.forEach((item) => {
//     let price = (item.offer/100)*(item.price);
//     totalprice = (item.price) - price;
//     setTotal((prev)=>{
//         return prev+totalprice;
//     })
//    });
    return (<>
        <div className="carthead">
            <h1>Cart item</h1>
            <div className="cartitem">
            {
                cartitem.cart.map((data)=>{
                    return (
                        <CartDetails key= {data.id} name={data.name} image={data.image} price={data.price} addTotal={addTotal} minusTotal={minusTotal} offer={data.offer}/>
                    )
                })
            }
            </div>
            <p>Total:<span>{total}</span></p>
        </div>
    </>)
};
export default Addtocart;






