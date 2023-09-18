import React from 'react'

function RemovedTask(props) {
  return (
    <>
       <div className="removedTask">
        <h1>Removed task </h1>
        {props.removedToDos.map((obj) => (
          <div className="removedTodo" key={obj.id}>
            <h2 style={{color:'red'}}>{obj.text}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default RemovedTask
