import './App.css';
import './Chicken.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './die';
import ListPicker from './ListPicker';

function App() {
  return (
    <div>
      <Greeter person="Bill" from="jj"/>
      <Greeter />
      <Greeter person="Rosa" from="july"/>
      <Die numSides={20}/>
      <Die />
      <Die numSides={3}/>
      <ListPicker values={[1, 2, 3]}/>
    </div>
  );
}

export default App
