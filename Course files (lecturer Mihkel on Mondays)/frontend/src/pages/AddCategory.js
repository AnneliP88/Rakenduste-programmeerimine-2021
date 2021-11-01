import AddCategoryForm from "../components/AddCategoryForm";

function AddCategory(){
  function categorySubmitHandler(category){
    fetch('http://localhost:8080/categories', {
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  return (
    <>
      <h1>Lisa uus kategooria</h1>
      <AddCategoryForm onAddCategory={categorySubmitHandler}/>
    </>
  );
}

export default AddCategory;