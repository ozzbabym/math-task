import { Route } from 'react-router-dom';
import './App.css';
import React from 'react'
import Example from './components/Example/Example';
import Mainmenu from './components/Mainmenu/Mainmenu';
import {reducer} from './reducer/reducer'

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    auth: false,
    examples: [],
    result: [],
    name: '',
    answer: ''
  })

 React.useEffect(() => {
   dispatch({type: 'ANSWER', payload: state.result})
 }, [state.result])
  return (
    <div className="App">
        <Route path={'/'} render={() => <Mainmenu dispatch={dispatch}/>} exact/>
        <Route path={'/example'} render={() => <Example state={state} dispatch={dispatch}/>} exact/>
    </div>
  );
}

export default App;
