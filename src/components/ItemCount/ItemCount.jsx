import React,{useState} from "react";



function ItemCount ({stock, initial}) {
    const [contador,setContador] = useState(initial)
    
    const onAdd = () =>{
        if(stock > 0 ){
            if(stock > contador ){
                setContador(contador + 1 )
            }
        }
    }
    const onRemove = () =>{
        if (contador > 0){
            setContador(contador - 1 )
        }
    }

    return(
        <div>
            <button onClick={() =>{
                onRemove()
            } }>-</button>
            <h4>{contador}</h4>
            <button onClick={() =>{
                onAdd()
            } }>+</button>
        </div>
    )
}

export default ItemCount