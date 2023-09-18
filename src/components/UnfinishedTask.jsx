import React from 'react'

function UnfinishedTask(props) {
  return (
    <>
        <div className="unfinished-task" id="parentdiv">
        <h1>Unfinished Task</h1>
        {props.toDos.map((obj) => {
          if (obj.status === false) {
            return (
              <div className="right" key={obj.id}>
                <h2 style={{ color: "orange" }}>{obj.text}</h2>
              </div>
            );
          }
        })}
      </div>
    </>
  )
}

export default UnfinishedTask
