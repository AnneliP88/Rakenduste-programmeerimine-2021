import {useRef} from 'react';

function AddCategoryForm(props){
  const nameImputRef = useRef();
  const typeImputRef = useRef();

  function formSubmitHandler(e){
    e.preventDefault();

    const nameValue = nameImputRef.current.value;
    const typeValue = typeImputRef.current.value;

    const category = {
      name: nameValue,
      category: typeValue
    }

    props.onAddCategory(category);
  }

  return(
    <form onSubmit={formSubmitHandler}>
      <label>Kategooria nimi</label><br/>
      <input type="text" required placeholder="Nimi" ref={nameImputRef}/><br/><br/>
      <label>Kategooria tüüp</label><br/>
      <select ref={typeImputRef}>
        <option value="PREMIUM">PREMIUM</option>
        <option value="DELUXE">DELUXE</option>
        <option value="BASIC">BASIC</option>
      </select><br/><br/>
      <button>Sisesta uus kategooria</button>
    </form>
  );
}

export default AddCategoryForm;