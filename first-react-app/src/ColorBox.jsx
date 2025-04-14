import './ColorBox.css'
import { useState } from 'react';

function randomChoice(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox ({colors}) {
    const [color, setColor] = useState(randomChoice(colors));
    const randomColor = () =>{
        setColor(randomChoice(colors));  
    } 
    return (
        <div 
        className="ColorBox"
        onClick={randomColor}
        style={{backgroundColor: color}}>
        </div>
    )
}