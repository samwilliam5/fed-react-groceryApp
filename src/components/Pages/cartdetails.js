import { useState } from "react"

function CartDetails({name,image,price,offer,addTotal,minusTotal}) {
    const originalPrice = (offer / 100) * (price)
    const save = (price) - (originalPrice)
    const [count,setCount] = useState(1);

    
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])
return(<><div>
    <div className="cartdetails">
            <img src={image} width={250}></img>
                <h4>{name}</h4>
                <span>Buy:{save}</span>
                <div>
                <span>M.R.P: ₹{price}</span>
                </div>
                <span>Save ₹{originalPrice}</span>
            </div>
                  <div><button style={{width:50 ,height:60} } onClick={()=>{
                        
                        let c = save * count;
                        addTotal(c);
                        setCount(count+1)
                     }}>+</button> <p>{count}</p>
                     <button style={{width:50 ,height:60} } onClick={()=>{
                         if(count>1){
                             let c = save* count;
                             minusTotal(c);
                             setCount(count-1) 
                         }
                     }
                      
                     }>-</button>
                     </div>
              
          <div>
            <p>total : <span> {count * save}</span></p>
          </div>
            </div>
    </>)
};
export default CartDetails;



