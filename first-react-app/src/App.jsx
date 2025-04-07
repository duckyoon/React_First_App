import './App.css';
import './Chicken.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './die';
import ListPicker from './ListPicker';
import ColorList from './ColorList';

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
      <ColorList colors={["red", "yellow", "blue"]}/>
    </div>
  );
}

export default App
