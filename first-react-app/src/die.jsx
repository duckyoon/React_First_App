export default function Die({numSides=6}){
    console.log(numSides)
    const roll = Math.floor(Math.random() * numSides + 1)
    return <h2>{numSides} Sided Die : {roll} </h2>
}