import './App.css';
import './Chicken.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './die';
import ListPicker from './ListPicker';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';

const data = [
  {id: 1, item:"eggs", quantity: 12, completed: false},
  {id: 2, item:"milk", quantity: 5, completed: true},
  {id: 3, item:"chicken breasts", quantity: 1, completed: false},
  {id: 4, item:"breed", quantity: 44, completed: true},
]

function App() {
  return (
    <div>
      <ShoppingList items={data}/>
      {/* <Greeter person="Bill" from="jj"/>
      <Greeter />
      <Greeter person="Rosa" from="july"/>
      <Die numSides={20}/>
      <Die />
      <Die numSides={3}/>
      <ListPicker values={[1, 2, 3]}/>
      <ColorList colors={["red", "yellow", "blue"]}/> */}
      {/* <Slots val1="a" val2="a" val3="a"/> */}

    </div>
  );
}

export default App
