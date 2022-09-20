import React ,{useEffect,useState} from "react";
import dataDB from "../../db/products"
import Item from "../Item/Item";
import "./itemsList.css"

const data = dataDB

function ItemsList (){

    const [products, setProducts] = useState()
    const [showItems, setShowItems] = useState(false)
    
    
let customFetch = (data) => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(data)
        } ,3000 )
    })
}


    useEffect( () => {
        customFetch(data)
        .then((product) => {
            console.log(product)
            if(product != undefined){
                setProducts(product)
                
            }
        })
        .then(()=> {
            setShowItems(true)
        })
    }, [])

    return(
        <div className="itemsListComponent" >
            {
                showItems == true ?
                products.map((item) => {
                    return(

                        <Item 
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.img}
                        />
                    )
                console.log("mate")
                })
                :
                console.log("error")
            }
        </div>
    )
}

export default ItemsList