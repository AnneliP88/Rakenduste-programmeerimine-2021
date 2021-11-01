import Category from '../components/Category';

function CategoryList(props){
  return(
    <div className="categoryListBoxesArea">
      {props.categories.map(category=>(
        <Category 
          key={category.id}
          name={category.name} 
          type={category.category}/>
          // Because category.category is how Class is defined in BE.
      ))}
    </div>
  );
}

export default CategoryList;