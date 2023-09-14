import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function DisplayCard() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {




        fetch('https://fakestoreapi.com/products')
            .then(results => results.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    });


    const productsToRender() = results.map(
        (eachProductObj) => (

            <div className="card_container" key={(eachProductObj.id)}>
                <img src={eachProductObj.image} alt={`Image of Product: ${eachProductObj.title}`} />

                <h4>
                    <div className="productId" id={eachProductObj.id}>
                        {`Product ID: ${eachProductObj.id}`}
                    </div>
                    <div className="productName">
                        {`Product Name: ${eachProductObj.title}`}
                    </div>
                    <div className="productPrice">
                        {`Product Price: ${eachProductObj.price}`}
                    </div>
                    <div className="productCategory">
                        {`Product Category: ${eachProductObj.category}`}
                    </div>
                    <div className="Product Description">
                        {`Product Description: ${eachProductObj.description}`}
                    </div>
                    <div className="productImage">
                        {`Product Image: ${eachProductObj.image}`}
                    </div>

                </h4>


            </div>






        )





    )


    return (
        <div className="">









        </div>





    )



}



export default DisplayCard; 