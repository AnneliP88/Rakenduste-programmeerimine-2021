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
      console.log(data);
      setIsLoading(false);
      setLoadedCategories(data);
    });
  },[])

  if(isLoading){
    return(<div>Laeb...</div>);
  }

  return (
    <div>
      <Link to="add-category">
        <button>Lisa uus kategooria</button>
      </Link>
      <CategoryList categories={loadedCategories}/>
    </div>
  )
}

export default CategoryPage;