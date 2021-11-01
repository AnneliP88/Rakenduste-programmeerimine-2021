import { useEffect, useState, useRef } from "react";
import Loader from '../components/Loader';

function EditItem() {
  const [item, setItem] = useState(null);
  const nameImputRef = useRef();
  const priceImputRef = useRef();
  const categoryImputRef = useRef();

  useEffect(()=>{
    const itemId = (window.location.href.split("/edit-item/")[1]);
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
  
  function formSubmitHandler(e){
    e.preventDefault();

    const nameValue = nameImputRef.current.value;
    const priceValue = priceImputRef.current.value;
    const categoryValue = categoryImputRef.current.value;
    const itemSubmitted = {
      id: item.id,
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }
    
    fetch('http://localhost:8080/edit-item', {
      method: 'POST',
      body: JSON.stringify(itemSubmitted),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <>
      <h1>Muuda eseme infot</h1>
      <form onSubmit={formSubmitHandler}>
        <label>Eseme nimi</label><br/>
        <input type="text" required defaultValue={item.name} ref={nameImputRef}/><br/><br/>
        <label>Eseme hind</label><br/>
        <input type="number" required defaultValue={item.price} ref={priceImputRef}/><br/><br/>
        <label>Eseme kategooria</label><br/>
        <input type="text" required defaultValue={item.category} ref={categoryImputRef}/><br/><br/>
        <button>Sisesta muudatus</button>
      </form>
    </>
    )
}

export default EditItem;