import React, { useState } from 'react';
const HookCounterTwo = () => {
    const initialState = 0
   const [count , setCount] = useState(initialState)
   
   const incrementByFive = ()=>{
       for (let i = 0; i<5; i++){
            // setCount(count + 1)
           setCount(preVCount => preVCount + 1)
       }
   }
    return (
        <div>
            {/* not a safe tech */}
            <h5>Count {count}</h5>
            <button onClick={()=>setCount(initialState + 1)}>
                Increment
            </button>
            <button onClick={()=>setCount(initialState - 1)}>
                Decrement 
            </button>
            <button onClick={()=>setCount(initialState)}>
                Reset 
            </button>
            {/* safe tech */}

            <button onClick={incrementByFive}>
                Increment By 5
            </button>

            {/* <h5>Count {count}</h5>
            <button onClick={()=>setCount(preVCount => preVCount + 1)}>
                Increment
            </button>
            <button onClick={()=>setCount(preVCount => preVCount + 1)}>
                Decrement 
            </button>
            <button onClick={()=>setCount(initialState)}>
                Reset 
            </button>
            {/* safe tech */}

            {/* <button onClick={incrementByFive}>
                Increment By 5
            </button> */} 
        </div>
      );
}
 
export default HookCounterTwo;