import {useRef} from 'react';

function AddItemForm(props){
  const nameImputRef = useRef();
  const priceImputRef = useRef();
  const categoryImputRef = useRef();

  function formSubmitHandler(e){
    e.preventDefault();

    const nameValue = nameImputRef.current.value;
    const priceValue = priceImputRef.current.value;
    const categoryValue = categoryImputRef.current.value;

    const item = {
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }

    props.onAddItem(item);
  }

  return(
    <form onSubmit={formSubmitHandler}>
      <label>Eseme nimi</label><br/>
      <input type="text" required placeholder="Nimi" ref={nameImputRef}/><br/><br/>
      <label>Eseme hind</label><br/>
      <input type="number" required placeholder="Hind" ref={priceImputRef}/><br/><br/>
      <label>Eseme kategooria</label><br/>
      <input type="text" required placeholder="Kategooria" ref={categoryImputRef}/><br/><br/>
      <button>Sisesta uus ese</button>
    </form>
  );
}

export default AddItemForm;