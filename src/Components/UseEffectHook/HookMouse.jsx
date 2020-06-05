import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
	window.addEventListener('mousemove', logMousePosition)
	 
	return ()=>	{
		console.log('component un mounting code')
		window.removeEventListener('mousemove',logMousePosition)
	}
	}, [])
	return (
		<div>
			{/* whatever you return in useEffect is your cleanup function */}
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse