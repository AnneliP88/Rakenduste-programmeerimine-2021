import {Link} from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import {useState, useEffect} from 'react';

function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/categories').then(res => {
      return res.json();
    }).then(data => {
      setIsLoading(false);
      setLoadedCategories(data);
    });
  },[])

  if(isLoading){
    return(<div className="loadingDivInfo">Laeb...</div>);
  }

  return (
    <div>
      <Link to="add-category">
        <button className="goToNewPage"><img className="addLogo" src="add-folder.png" alt="add icon"/> Lisa uus kategooria</button>
      </Link>
      <h1>Kategooriad</h1>
      <div className="categoriesPageBoxesArea">
        <CategoryList categories={loadedCategories}/>
      </div>
    </div>
  )
}

export default CategoryPage;