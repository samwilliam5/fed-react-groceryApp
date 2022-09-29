import React, { useState } from "react";
import './form.css';

function Form(props) {

    const [addedform, setForm] = useState({
        restaurant: '',
        variety: '',
        offer: '',
        price: '',
        ratings: '',
        
    });

    const resHandler = (event) => {
        setForm((addedform) => {
            return { ...addedform, restaurant: event.target.value }
        });
    }
    const varHandler = (event) => {
        setForm((addedform) => {
            return { ...addedform, variety: event.target.value }
        });
    }
    const offHandler = (event) => {
        setForm((addedform) => {
            return { ...addedform, offer: event.target.value }
        });
    }
    const priHandler = (event) => {
        setForm((addedform) => {
            return { ...addedform, price: event.target.value }
        });
    }
    const ratHandler = (event) => {
        setForm((addedform) => {
            return { ...addedform, ratings: event.target.value }
        });
    }
    // const foodHandler = (event) => {
    //     setForm((previousform) => {
    //         return { ...previousform, food: event.target.value }
    //     });
    // }

    const subjectHandler = (a) => {
        a.preventDefault();
        // const addedform = { ...form, id: Math.random().toString() }
        props.onFormAdded(addedform);
        setForm({
            restaurant: '',
            variety: '',
            offer: '',
            price: '',
            ratings: '',
            
        })
    }

    return (
        <div className="form">
            <h3>Add New Food</h3>
            <form type='login' className="addNewfood" onSubmit={subjectHandler}>
                <fieldset>
                    <legend></legend>
                    <label htmlFor="">Restaurant Name</label>
                <input type="text" placeholder="Restaurant Name"  onChange={resHandler} value={addedform.restaurant}></input><br />
                <label htmlFor="">Variety of Food</label>
                <input type="text" placeholder="Variety"  onChange={varHandler} value={addedform.variety}></input><br />
                <label htmlFor="">Select available offers</label>
                <input type="number" placeholder="Offers"  onChange={offHandler} value={addedform.offer}></input><br />
                <label htmlFor="">Select your Price</label>
                <input type="number" placeholder="Price" onChange={priHandler} value={addedform.price}></input><br />
                <label htmlFor="">Select your Ratings</label>
                <input type="number" placeholder="Ratings"  onChange={ratHandler} value={addedform.ratings}></input><br />
                <div  className="btnsubmit">
                <button type="submit" >Submit</button>
                </div>
                </fieldset>
            </form>
        </div>
    )
}
export default Form;