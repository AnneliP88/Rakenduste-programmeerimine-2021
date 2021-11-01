import ItemList from '../components/ItemList';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Loader from '../components/Loader';

function AdminHome() {
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

  function makeDeleteRequest(itemId) {
    fetch('http://localhost:8080/delete-item/' + itemId,
      {method: 'DELETE'}
    ).then(res => {
      return res.json();
    }).then(data => {
      setIsLoading(false);
      setLoadedItems(data);
    });
  }

  if(isLoading){
    // return(<div className="loadingDivInfo">Laeb...</div>);
    return (<Loader/>)
  }

  return (
    <>
      <section>
        <div className="goToNewPageBtnArea">
          <Link to="add-item">
            <button className="goToNewPageBtn">
              <img src="add.png" alt="add icon"/>
              <span> Lisa uus ese</span>
            </button>
          </Link>
        </div>
      </section>
      <h1>Esemed</h1>
      <section>
        <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems}/>
      </section>
    </>
  )
}

export default AdminHome;