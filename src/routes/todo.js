import React, { useState } from "react";

function Todo() {
  const initialValues = {
    date: "",
    description: "",
    tag: "",
  };

  const [values, setValues] = useState(initialValues);

  //TODO: Taulukon tilalle db.json
  //"database"
  const [items, setItems] = useState([
    { description: "Vie roskat", date: "2021-12-07", tag: "Kotityöt" },
    { description: "Vie roskat", date: "2021-12-07", tag: "Kotityöt" },
    { description: "Vie roskat", date: "2021-12-07", tag: "Kotityöt" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      date: values.date,
      description: values.description,
      tag: values.tag,
    };

    setItems([...items, newItem]);
    setValues(initialValues);
  }

  return (
    <div className="Todo-app">
      <h1>TODAY'S TODO LIST</h1>
      {/* LOMAKKEET */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            id="dateForm"
            onChange={handleInputChange}
            type="date"
            name="date"
            value={values.date}
          />
          <input
            name="description"
            value={values.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            name="tag"
            value={values.tag}
            onChange={handleInputChange}
            placeholder="Tag"
          />
          <button type="submit">Add task</button>
        </form>
      </div>
      {/* LISTA */}
      <div className="item-list">
        {items.map((item) => (
          <div className="item-container">
            {/* PALIKAT */}
            <div className="item-name">
              <span id="span-date">{item.date} </span>
              <span id="span-desc">{item.description} </span>
              <span id="span-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
