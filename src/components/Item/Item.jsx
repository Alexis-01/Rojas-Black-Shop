import React from "react";
import "./item.css"


const itemImage = require.context('../../public/images',true)

function Item (props) {

    return(
        <div className="itemComponent" >
            <img src={itemImage(`./${props.image}`)} alt="producto" />
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
        </div>
    )

}

export default Item 