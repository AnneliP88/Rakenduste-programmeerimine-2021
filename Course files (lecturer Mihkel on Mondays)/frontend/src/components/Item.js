function Item(props) {
  return (
    <div className="itemBox">
      <div className="itemName"><strong>Nimetus:</strong> {props.name}</div>
      <div className="itemPrice"><strong>Hind:</strong> {props.price} €</div>
      <div className="itemCategory"><strong>Kategooria:</strong> {props.category}</div>
    </div>
  )
}

export default Item;