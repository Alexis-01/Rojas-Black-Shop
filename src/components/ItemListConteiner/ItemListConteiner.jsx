import React from "react";
import ItemCount from "../ItemCount/ItemCount";


function ItemListConteiner (props){
    return(
        <div>
            <h2>
            {props.greeting}
            </h2>
            <ItemCount 
            stock={5}
            initial={2}
            />
        </div>
    )

}
export default ItemListConteiner