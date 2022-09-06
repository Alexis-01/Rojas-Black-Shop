import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './cartWidget.css'


function CartWidget (props){
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{props.numero}</p>
        </div>
    )
}
export default CartWidget