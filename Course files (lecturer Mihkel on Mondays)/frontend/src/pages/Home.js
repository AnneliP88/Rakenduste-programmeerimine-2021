import ItemList from '../components/ItemList';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data => {
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

  if(isLoading){
    return(<div className="loadingDivInfo">Laeb...</div>);
  }

  return (
    <div>
      <Link to="add-item">
        <button className="goToNewPage"><img className="addLogo" src="add.png" alt="add icon"/> Lisa uus ese</button>
      </Link>
      <h1>Esemed</h1>
      <div className="itemsPageBoxesArea">
        <ItemList items={loadedItems}/>
      </div>
    </div>
  )
}

export default Home;