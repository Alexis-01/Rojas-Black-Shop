import React from "react";
import'./itemDetail.css'

const itemImage = require.context('../../public/images',true)

function ItemDetail({item}){
    return(
        <div>
            <img src={itemImage(`./${item.image}`)} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
        
        </div>
    )
}

export default ItemDetail;