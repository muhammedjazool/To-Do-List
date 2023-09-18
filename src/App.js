import React from "react";
import "./App.css";
import { useState, useRef } from "react";
import UnfinishedTask from "./components/UnfinishedTask";
import RemovedTask from "./components/RemovedTask";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [removedToDos, setRemovedToDos] = useState([]);

  const removeToDo = (id) => {
    const removedTask = toDos.find((obj) => obj.id === id);
    setToDos(toDos.filter((obj) => obj.id !== id));
    setRemovedToDos([...removedToDos, removedTask]);
  };

  const inputRef = useRef(null);

  const handleOnChange = (event) => {
    setToDo(event.target.value);
  };

  const focusInput = (event) => {
    event.preventDefault();
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
    inputRef.current.focus();
  };

  return (
    <>
      <UnfinishedTask toDos={toDos} />
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>

        <form onSubmit={focusInput}>
          <div className="input">
            <input
              value={toDo}
              onChange={handleOnChange}
              type="text"
              ref={inputRef}
              placeholder="🖊️ Add item..."
            />
            {toDo.trim() !== "" && (
              <button type="submit">
                <i className="fas fa-plus" style={{ color: "white" }}></i>
              </button>
            )}
          </div>
        </form>

        <div className="todos">
          {toDos.map((obj) => {
            return (
              <div className="todo" key={obj.id}>
                <div className="left">
                  <input
                    onChange={(e) => {
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />

                  <p>{obj.text}</p>
                </div>

                <div className="right">
                  <i
                    onClick={() => removeToDo(obj.id)}
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          })}

          {toDos.map((obj) => {
            if (obj.status) {
              return <h1 style={{ color: "green" }}>{obj.text}</h1>;
            }
            return null;
          })}
        </div>
      </div>

      <RemovedTask removedToDos={removedToDos} />
    </>
  );
}

export default App;
