import { useState} from 'react';

function FormInput() {
    const [text, setText] = useState("");

    return ( 
    <div>
        <h2>Text Input</h2>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"/> 

        <p>You entered: {text}</p>
         </div>
         );
}

export default FormInput;
