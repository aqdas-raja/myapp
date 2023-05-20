import React, { useState } from "react";

function Linked() {
    const [name, setName] = useState('');

    const handleInputChange = () => {
        document.getElementById("test").innerHTML ="Name: " + name;
        console.log (process.env.REACT_APP_KEY)

    };

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <p id="test"></p>
            <button onClick={handleInputChange}>Test</button>
        </div>
    );
}

export default Linked;

