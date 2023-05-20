import React from 'react'

function Task() {

function displayAlert() {
    const name=prompt("enter your name");
    alert(name);
}

  return (
    <div> 
        <button onClick={displayAlert}>Click Me</button>
    
    </div>
  )


}

export default Task;

