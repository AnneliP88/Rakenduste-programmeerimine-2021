import ItemList from '../components/ItemList';
import {useState, useEffect} from 'react';
import Loader from '../components/Loader';

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
    // return (<div className="loadingDivInfo">Laeb...</div>);
    return (<Loader/>)
  }

  return (
    <>
      <h1>Esemed</h1>
      <section>
        <ItemList isAddToCart={true} items={loadedItems}/>
      </section>
    </>
  )
}

export default Home;