import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [directions, setDirections] = useState([
    { id: uuidv4()},{ id: uuidv4()}
  ]);
  const [ingredients, setIngredients] = useState([
    { id: uuidv4()},{ id: uuidv4()}
  ]);

  let formatedDir = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("title ", title);
    console.log("description ", description);
    directions.map(inputField => {
      formatedDir.push(inputField.direction);
    })
    console.log("Formatted", formatedDir);
    
  };
  
  const handleChangeInputDir = (id, event) => {
    const newInputFields = directions.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setDirections(newInputFields);
  }

  const handleAddDir = () => {
    setDirections([...directions, { id: uuidv4()}])
  }

  const handleRemoveDir = id => {
    const values  = [...directions];
    values.splice(values.findIndex(value => value.id === id), 1);
    setDirections(values);
  }

  const handleChangeInputIng = (id, event) => {
    const newInputFields = ingredients.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setIngredients(newInputFields);
  }

  const handleAddIng = () => {
    setIngredients([...ingredients, { id: uuidv4()}])
  }

  const handleRemoveIng = id => {
    const values  = [...ingredients];
    values.splice(values.findIndex(value => value.id === id), 1);
    setIngredients(values);
  }
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="marginWrap">
          <h3 className="title">Title</h3>
          <input type="text" className="titleInput" onChange={event => handleChangeTitle(event)}/>
        </div>
        <div>
          <h3 className="marginWrap">Description</h3>
          <textarea className="descriptionInput" onChange={event => handleChangeDescription(event)}/>
        </div>

        <h3 className="subHead">Directions</h3>
            <button type="button" onClick={handleAddDir}>
                Add New Field
            </button>
            { directions.map((inputField, index) => (
            <div key={inputField.id} className="inputField">
                <p className="index">{index + 1}. </p>
                <textarea className="listInput" type="text" name="direction" label="Direction" value={inputField.direction} 
                    onChange={event => handleChangeInputDir(inputField.id, event)}/>
                <button className="remove" type="button" disabled={directions.length === 1} onClick={() => handleRemoveDir(inputField.id)}>
                    remove
                </button>
            </div>
            )) }
        <h3 className="subHead">Ingredients</h3>
            <button type="button" onClick={handleAddIng}>
              Add New Field
            </button>
            { ingredients.map((inputField, index) => (
            
            <div key={inputField.id} className="inputField">
                <p className="index">{index + 1}. </p>
                <textarea className="listInput" name="ingred" label="First Name" value={inputField.firstName} 
                    onChange={event => handleChangeInputIng(inputField.id, event)}/>
                <button className="remove" type="button" disabled={ingredients.length === 1} onClick={() => handleRemoveIng(inputField.id)}>
                    remove
                </button>
            </div>
            )) }
        
        <button className="submit" type="submit" onClick={handleSubmit}>
            Send
        </button>
      </form>
    </div>
  );
}

export default Form;