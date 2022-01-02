
export default function List(props){
    return (
    <>
        <ul>
            {props.list.map((tod) => (
                <li key={tod.id}>{tod.content}</li>
            ))}
        </ul>
    </>
    )
}