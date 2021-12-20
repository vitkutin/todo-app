import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegTrashAlt, FaEdit, FaAngleDown, FaAngleUp } from "react-icons/fa";

function Todo() {
  //Clears textfield after input
  const initialValues = {
    date: "",
    description: "",
    tag: "",
    search: "",
  };

  const [input, setInput] = useState(initialValues);

  //List of tasks (contains one example task)
  let [list, setList] = useState([
    {
      id: "014747ee-2784-44ef-8887-88f381e3baay",
      date: "2021-14-12",
      description: "Tiskaa",
      tag: "kotityöt",
    },
  ]);

  //Updates input state
  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  //Creates new list item and updates list on submit
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      date: input.date,
      description: input.description,
      tag: input.tag,
    };

    setList([...list, newItem]);
    setInput(initialValues);
  }

  //Edits task description and adds modified task to the end of the list
  function handleEdit(e) {
    let edited = window.prompt("Edit description");
    let editedItem = {
      id: uuidv4(),
      description: edited,
      date: e.date,
      tag: e.tag,
    };
    const newList = list.filter((el) => el.id !== e.id);
    setList([...newList, editedItem]);
  }

  //Filters element from list by comparing id's
  function handleDelete(e) {
    setList(list.filter((el) => el.id !== e.id));
  }

  //Reduces element index by one number, moving it up in the list
  function moveUp(id) {
    let index = list.findIndex((e) => e.id === id);
    if (index > 0) {
      let el = list[index];
      list[index] = list[index - 1];
      list[index - 1] = el;
    }
    setList([...list]);
  }

  //Increases element index by one number, moving it down in the list
  function moveDown(id) {
    let index = list.findIndex((e) => e.id === id);
    if (index !== -1 && index < list.length - 1) {
      let el = list[index];
      list[index] = list[index + 1];
      list[index + 1] = el;
    }
    setList([...list]);
  }

  //Filters by tag
  function handleSearch(e) {
    e.preventDefault();
    //Creates a copy from the current list
    var listCopy = [...list];
    //Finds elements that match the input string
    var searchedTag = input.search;
    var filteredList = listCopy.filter(function (el) {
      return el.tag === searchedTag;
    });
    //Updates list to show only elements with corresponding tag
    setList([...filteredList]);
    setInput(initialValues);
  }

  return (
    <div>
      <h1>TODAY'S TODO LIST</h1>
      {/* Forms for date, description and tag */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            name="date"
            value={input.date}
            onChange={handleInputChange}
            type="date"
          />
          <input
            name="description"
            value={input.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <input
            name="tag"
            value={input.tag}
            onChange={handleInputChange}
            placeholder="Tag"
          />
          <button type="submit">Add task</button>
        </form>
      </div>

      {/* Filter form */}
      <div className="search-form-container">
        <form onSubmit={handleSearch}>
          <input
            name="search"
            value={input.search}
            onChange={handleInputChange}
            placeholder="Filter by tag"
          />
          <button type="submit">Filter</button>
        </form>
      </div>
      {/* List */}
      <div className="item-list">
        {list.map((e) => (
          <div className="item-container">
            {/* Elements */}
            <div>
              <span id="span-desc"> {e.description} </span>
              <span id="span-date"> {e.date} </span>
              <span id="span-tag">
                {"#"}
                {e.tag}
              </span>
              <span id="buttons">
                {/* MOVE UP BUTTON */}
                <button id="taskBtn">
                  <FaAngleUp
                    onClick={() => {
                      moveUp(e.id);
                    }}
                  />
                </button>

                {/* MOVE DOWN BUTTON */}
                <button id="taskBtn">
                  <FaAngleDown onClick={() => moveDown(e.id)} />
                </button>

                {/* DELETE BUTTON */}
                <button id="taskBtn">
                  <FaRegTrashAlt onClick={() => handleDelete(e)} />
                </button>

                {/* EDIT BUTTON */}
                <button id="taskBtn">
                  <FaEdit onClick={() => handleEdit(e)} />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
