import React, { useState } from 'react';

const HookCounter = () => {

     const [count , setCount] = useState(0);
    
    return ( 
        <div>
            <h2>Functional Componet using Hooks (useState)</h2>
            <button onClick={()=>setCount (count + 1)}>Count {count}</button>
        </div>
     );
}
 
export default HookCounter;