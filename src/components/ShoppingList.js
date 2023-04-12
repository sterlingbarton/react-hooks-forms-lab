import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBy, setSearchBy] = useState('')
  const [allItems, setAllItems] = useState(items)
  const [submittedData, setSubmittedData] = useState('')
  const [addCategory, setAddCategory] = useState('All')

  function onItemFormSubmit(e){
    console.log(e)
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: submittedData,
      category: addCategory
    }
    console.log(newItem)
    setAllItems([...allItems, newItem])
  }

  function onSearchChange(e){
    setSearchBy(e.target.value)
  }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = allItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item)=> (
    item.name.toLowerCase().includes(searchBy.toLowerCase())
  ))
  return (
    <div className="ShoppingList">
      <ItemForm 
      items={allItems} 
      setAllItems={setAllItems} 
      submittedData={submittedData} 
      setSubmittedData={setSubmittedData} 
      addCategory={addCategory} 
      setAddCategory={setAddCategory} 
      onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} searchBy={searchBy} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
