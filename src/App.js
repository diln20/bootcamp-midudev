
import './App.css';

import {Mensaje} from './Mensaje'

const App = ()=> {

  const Description = ()=>{
    return <p>Esta es la app del curso fullstack bootcamp</p>
  }

  return (
    <div className="App">
   <Mensaje></Mensaje>
   <Mensaje></Mensaje>
   <Mensaje message="dilan" color="red"></Mensaje>
   <Description></Description>
    </div>
  );
}

export default App;
