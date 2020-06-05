import React , {useReducer} from 'react';
import './App.css';
import ClassCounter from './Components/UseStateHook/ClassCounter'
import HookCounter from './Components/UseStateHook/HookCounter'
import ClassCounterTwo from './Components/UseStateHook/ClassCounterTwo';
import HookCounterTwo from './Components/UseStateHook/HookCounterTwo';
import HookCounterThree from './Components/UseStateHook/HookCounterThree';
import HookCounterFour from './Components/UseStateHook/HookCounterFour';
import ClassCounterOne from './Components/UseEffectHook/ClassCounterOne';
import HookCounterOne from './Components/UseEffectHook/HookCounterOne'
import ClassMouse from './Components/UseEffectHook/ClassMouse';
import HookMouse from './Components/UseEffectHook/HookMouse';
import MouseContainer from './Components/UseEffectHook/MouseContainer';
import IntervalClassCounter from './Components/UseEffectHook/IntervalClassCounter';
import IntervalHookCounter from './Components/UseEffectHook/IntervalHookCounter'
import DataFetching from './Components/UseEffectHook/DataFetching';
// import ComponentC from './Components/UseContextHook/ComponentC'
import CounterOne from './Components/UseReducerHook/CounterOne';
import CounterTwo from './Components/UseReducerHook/CounterTwo';
import CounterThree from './Components/UseReducerHook/CounterThree';
import ComponentA from './Components/UseReducerHook/ComponentA';
import ComponentB from './Components/UseReducerHook/ComponentB';
import ComponentC from './Components/UseReducerHook/ComponentC';
import Componentc from './Components/UseContextHook/ComponentC';
import DataFetchingOne from './Components/UseReducerHook/DataFetchingOne'
import DataFetchingTwo from './Components/UseReducerHook/DataFetchingTwo';
import ParentComponent from './Components/UseCallBackHook/ParentComponent';
import Counter from './Components/UseMemoHook/Counter';
import FocusInput from './Components/UseRefHook/FocusInput';
import ClassTimer from './Components/UseRefHook/ClassTimer';
import HookTimer from './Components/UseRefHook/HookTimer';
import { BrowserRouter, Route, Link , Switch } from "react-router-dom";
import Header from './Components/Header';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
    <div>
      <Header/>
      </div>
      <div className="Container-block">
        {/* useState Component */}
       <Route path="/classStateExample" component = {ClassCounter} /> {/* <ClassCounter/> */}
       <Route path="/ClassPrevStateExample" component ={ClassCounterTwo} /> {/* <ClassCounterTwo/> */}
       <Route path="/HookStateExample" component ={HookCounter} /> {/* <HookCounter/> */}
       <Route path="/HookPrevStateExample" component ={HookCounterTwo} /> {/* <HookCounterTwo/> */}
       <Route path="/HookObjectExample" component ={HookCounterThree} /> {/* <HookCounterThree/> */}
       <Route path="/HookArrayExample" component ={HookCounterFour} /> {/* <HookCounterFour/> */}

       {/* useEffect component  */}
       <Route path="/classCounterExample" component ={ClassCounterOne} /> {/* <ClassCounterOne/> */}
       <Route path="/HookCounterExample" component ={HookCounterOne} /> {/* <HookCounterOne/> */}
       <Route path="/ClassMouse" component ={ClassMouse} /> {/* <ClassMouse/> */}
       <Route path="/HookMouse" component ={HookMouse} /> {/* <HookMouse/> */}
       <Route path="/MouseContainer" component ={MouseContainer} /> {/* <MouseContainer/> */}
       <Route path="/IntervalClassCounter" component ={IntervalClassCounter} /> {/* <IntervalClassCounter/> */}
       <Route path="/IntervalHookCounter" component ={IntervalHookCounter} /> {/* <IntervalHookCounter/> */}
       <Route path="/DataFetching" component ={DataFetching} /> {/* <DataFetching/> */}
     
      
{/* useContext component */}
       <UserContext.Provider value={'Shrushti'}>
        <ChannelContext.Provider value={'Vyas'}>
				  <Route path="/ComponentC" component ={Componentc} />   {/* <Componentc /> */}   
			</ChannelContext.Provider>
			</UserContext.Provider> 

      {/* useReducer Component */}
      <Route path="/CounterOne" component ={CounterOne} />  {/* <CounterOne/> */}
      <Route path="/CounterTwo" component ={CounterTwo} />   {/* <CounterTwo/> */}
      <Route path="/CounterThree" component ={CounterThree} /> {/* <CounterThree/> */}
      <CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
 
			<div className="App">
      <Route path="/Components" component ={ComponentA} />   {/* <ComponentA /> */}
      <Route path="/Components" component ={ComponentB} />   {/* <ComponentB /> */}
      <Route path="/Components" component ={ComponentC} />   {/* <ComponentC /> */}
			</div>
		</CountContext.Provider>
    <Route path="/DataFetchingOne" component ={DataFetchingOne} /> {/* <DataFetchingOne/> */}
    <Route path="/DataFetchingTwo" component ={DataFetchingTwo} /> {/* <DataFetchingTwo/> */}

     {/* UseCallBackHook Component */}
     <Route path="/ParentComponent" component ={ParentComponent} /> {/* <ParentComponent/> */}

    {/* UseMemoHook Component  */}
    <Route path="/Counter" component ={Counter} /> {/* <Counter/> */}

    {/* UseRefHook Component */}
    <Route path="/FocusInput" component ={FocusInput} /> {/* <FocusInput /> */}
		<Route path="/ClassTimer" component ={ClassTimer} /> {/* <ClassTimer /> */}
		<Route path="/HookTimer" component ={HookTimer} />	{/* <HookTimer /> */}

    </div>
    </BrowserRouter>
  );
}

export default App;
