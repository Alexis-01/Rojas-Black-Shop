import React, {useEffect,useState}from "react";
import './itemDetailContainer.css' 
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){

    const [itemData,setItemData] = useState()
    const [showItem,setShowItem] = useState(false)

    let getItem = (data) => {
        return new Promise((res,rej) => {
            setTimeout(() => {
                res(data)
            } ,2000 )
        })
    }
    
    useEffect( () => {
        getItem (data)
        .then((product) => {
            console.log(product)
            if(product != undefined){
                setItemData(product)
                
            }
        })
        .then(()=> {
            setShowItem(true)
        })
    }, [])

    return(
        <div>
            {
                showItem === true?
                <ItemDetail
                image = {itemData.img}
                title = {itemData.title}
                price = {itemData.price}
                description = {itemData.description}
                />
                :
                console.log('showItem is false')
            }
        </div>
    )
} 

export default ItemDetailContainer;