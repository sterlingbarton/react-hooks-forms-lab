import React, {useState} from "react";



function ItemForm({items, setAllItems, addCategory, setAddCategory, submittedData, setSubmittedData, onItemFormSubmit}) {
  function handleChange(e){
    setSubmittedData(e.target.value)
    console.log(submittedData);
  }
  function handleSubmit(e){
    onItemFormSubmit(e)
  }

  function handleCategoryChange(e){
    setAddCategory(e.target.value)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={submittedData} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
