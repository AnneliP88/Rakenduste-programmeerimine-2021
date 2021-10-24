function Category(props) {
  return (
    <div className="categoryBox">
      <div className="categoryName"><strong>Nimetus:</strong> {props.name}</div>
      <div className="categoryType"><strong>Tüüp:</strong> {props.type}</div>
    </div>
  )
}

export default Category;