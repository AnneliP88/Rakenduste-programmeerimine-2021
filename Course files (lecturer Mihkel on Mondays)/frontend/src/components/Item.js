import { Link } from "react-router-dom";

function Item(props) {
  function handleDelete(itemId) {
    props.deleteItem(itemId);
  }

  return (
    <div className="itemBox">
      { props.isSingleItemView ? 
      <div>
        <div className="itemId"><strong>Eseme id:</strong> {props.id}</div>
        {/* <div className="itemName"><strong>Nimetus:</strong> {props.name}</div> */}
        <div className="itemPrice"><strong>Hind:</strong> {props.price}</div>
        <div className="itemCategory"><strong>Kategooria:</strong> {props.category}</div>
      </div> :  
      <Link to={`item/${props.id}`}>
        <div className="itemName"><strong>Nimetus:</strong> {props.name}</div>
        <div className="itemPrice"><strong>Hind:</strong> {props.price} €</div>
        <div className="itemCategory"><strong>Kategooria:</strong> {props.category}</div>
      </Link> }

      { props.isAddToCartButton ? 
      <button className="addToCartBtn">
        <img src="/cart.svg" alt="cart pic"/> Lisa ostukorvi
      </button> : 
        <div className="editDeleteBtnContainer">
          <button className="deleteItemBtn" onClick={()=>handleDelete(props.id)}>
            <img src="/trash.png" alt="delete icon"/>
          </button>
          <Link to={`edit-item/${props.id}`}>
            <button className="editItemBtn">
              <img src="/edit.png" alt="edit icon"/>
            </button>
          </Link>
        </div> }
    </div>
  )
}

export default Item;