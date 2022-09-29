import React from 'react';
import Foods from './food';


function FoodList(props){
    return(<>
    {
        (props.foods.length===0|| props.foods.length<2)&&<p></p>
    }
    {
        props.foods.length>0?(props.foods.map((foods)=>{
            return<Foods
            id={foods.id}
            key={foods.restaurant} 
            restaurant={foods.restaurant} 
            variety={foods.variety}
            offer={foods.offer}
            price={foods.price}
            ratings={foods.ratings}>
            </Foods>
        })):<div className='body-con'><p></p></div>
    }
    </>);
}

export default FoodList;