import { useState } from 'react'
import './App.css';


const MyDiv = (props) => {
	const color = props.color;
	return (
		<h1 style={{
			backgroundColor: color,
			color: 'white'
		}}>Change my Color</h1>
	)
}

function App() {

	const [state, SetState] = useState({
		color: "blue",
		colors: ['blue', 'red', 'green']
	})

	const changeColor = (color) => {
		console.log(color)
		console.log(typeof(color))
		console.log(state.color)
		SetState({
			...state,
			color: color
		});
	}

	console.log(state.colors)
  return (
    <div className="App">
      <MyDiv color={state.color}/>
      <h1>Okay Cool Brother it works</h1>
      {state.colors.map(color => <button key={state.colors.indexOf(color)} onClick={() => changeColor(color)}>{color}</button>)}
    </div>
  );
}

export default App;
