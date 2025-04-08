export default function Slots({val1, val2, val3}){
    const win = val1 === val2 && val2 === val3
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            {/* {win ? (
                    <h2 style={{color: "green"}}>You win!</h2>
                ) : (
                    <h2 style={{color: "red"}}>You lose!</h2>
                )} */}

            <h2 style={{color: win ? "green" : "red"}}>
                {win ? "You Win" : "You lose!"}
            </h2>
            {win && <h3>Congrats!</h3>}
        </div>
    );
}