import React, { useState } from 'react'

function HookCounterThree() {
    const [name , setName] = useState({ firstName : '' , lastName : ''})
	return (
		<form>
<h2>Function component using Hooks useState with object</h2>
            {/* as its has aproblem when we edit first name ad after that 
            when we started edit last name first name desappears ans same in opp this happens because the use state does
            not automatically merge and update the object we have to do it manually in this where as in class component setstate merge it automatically */}
            {/* <input type='text' value={name.firstName} onChange={e => setName({firstName : e.target.value})}>
            </input>
            <input type='text' value={name.lastName} onChange={e => setName({lastName : e.target.value})}>
            </input>
            <h2>First Name is {name.firstName}</h2>
            <h2>Last Name is {name.lastName}</h2> */}

            {/* for over come this we can use spread operator tommerge it 
            it this we can spread name and then set the approprate properties */}
            <input 
            type='text' 
            value={name.firstName} 
            onChange={e => setName({ ...name ,firstName : e.target.value})}>
            </input>
            <input 
            type='text' 
            value={name.lastName} 
            onChange={e => setName({ ...name ,lastName : e.target.value})}>
            </input>
            <h2>First Name is {name.firstName}</h2>
            <h2>Last Name is {name.lastName}</h2>
        </form>
	)
}

export default HookCounterThree