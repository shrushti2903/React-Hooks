import React ,{useEffect , useState} from 'react';

const HookCounterOne = () => {
    const [count , setCount]=useState(0)
    // const [name, setName] = useState('')
    useEffect (()=>{
        // console.log('update tittle')
        document.title = `you clicked ${count} times`
    } )
    // , [count]
    return ( 
    <div>
        <h2>functional component using useEffect hook after render componentDidUpdate</h2>
        {/* <input value={name} onChange={e => setName(e.target.value)}>
        </input> */}
        <h2>Count {count}</h2>
    <button onClick={()=> setCount (count + 1)}>Count {count} times</button>
    </div> 
     );
}
 
export default HookCounterOne;