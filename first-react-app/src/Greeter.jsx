// export default function Greeter(props){
//     return <h1>Hi there, {props.person} !! </h1>
// }
export default function Greeter({person="everyone", from="anonymous"}){
    return (
        <>
        <h1>Hi there, {person} !! </h1>
        <h2> - {from}</h2>
        </>
    );
}