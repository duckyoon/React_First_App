import './App.css';
import './Chicken.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './die';
import ListPicker from './ListPicker';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
// const data = [
//   {id: 1, item:"eggs", quantity: 12, completed: false},
//   {id: 2, item:"milk", quantity: 5, completed: true},
//   {id: 3, item:"chicken breasts", quantity: 1, completed: false},
//   {id: 4, item:"breed", quantity: 44, completed: true},
// ]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      <PropertyList items={properties}/>      
      {/* <ShoppingList items={data}/> */}
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
