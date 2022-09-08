import React from "react";
import "./item.css"


let img
let productName 
let imgUrl
if(productName != undefined){
    img = require(`../../public/images/${imgUrl}`)
}

function Item (props) {
    productName = props.image
    return(
        <div className="itemComponent" >
            <img src={img} alt="producto" />
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
        </div>
    )

}

export default Item 