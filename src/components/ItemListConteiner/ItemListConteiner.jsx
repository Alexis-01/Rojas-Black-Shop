import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemsList from "../ItemsList/ItemsList";

function ItemListConteiner (props){
    return(
        <div>
            <ItemsList/>
            {/* <ItemCount  }
            stock={5}
            initial={2}
    />*/}
        </div>
    )

}
export default ItemListConteiner