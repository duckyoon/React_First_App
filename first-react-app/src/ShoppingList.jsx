import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({items}){
    return(
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item}
                    quantity={i.quantity}
                    completed={i.completed} 
                />
                // 전달하는 프로퍼티와 이름이 일치하면
                // 전개 연산자로 아래를 위와 같이 표현할 수 있음.
                //<ShoppingListItem  key={i.id} {...i} />
            ))}
        </ul>
    );
}
export default ShoppingList;

// const data = [
//     { item:"eggs", quantity: 12, completed: false},
//     { item:"milk", quantity: 5, completed: true},
//     { item:"chicken breasts", quantity: 1, completed: false},
//     { item:"breed", quantity: 44, completed: true},
//   ]