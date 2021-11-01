import { useEffect, useState } from "react";
import Item from "../components/Item";
import Loader from '../components/Loader';

function SingleItem() {
  const [item, setItem] = useState(null);

  useEffect(()=>{
    const itemId = window.location.href.split("/item/")[1];
    fetch("http://localhost:8080/view-item/" + itemId).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      setItem(data);
    })
  },[])
  
  if(!item) {
    // return (<div className="loadingDivInfo">Laeb...</div>);
    return (<Loader/>)
  }
  
  return (
    <>
      <h1>{item.name}</h1>
      <div className="SingleItemPageArea">
        <Item
          id={item.id}
          // name={item.name} 
          price={item.price} 
          category={item.category}
          isAddToCartButton={true}
          isSingleItemView={true}
        />
      </div>
    </>
  )
}

export default SingleItem;