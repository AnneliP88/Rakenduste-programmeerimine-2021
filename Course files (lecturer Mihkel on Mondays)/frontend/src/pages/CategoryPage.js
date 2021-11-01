import {Link} from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import {useState, useEffect} from 'react';
import Loader from '../components/Loader';

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
    // return(<div className="loadingDivInfo">Laeb...</div>);
    return (<Loader/>)
  }

  return (
    <>
      <section>
        <div className="goToNewPageBtnArea">
          <Link to="add-category">
            <button className="goToNewPageBtn">
              <img src="add-folder.png" alt="add icon"/> 
              <span> Lisa uus kategooria</span>
            </button>
          </Link>
        </div>
      </section>
      <h1>Kategooriad</h1>
      <section>
        <CategoryList categories={loadedCategories}/>
      </section>
    </>
  )
}

export default CategoryPage;