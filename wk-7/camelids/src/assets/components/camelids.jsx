function Camelid(props) {
    return(
        <div>
            <h2>{props.name}</h2>
            <img
            src={props.image}
            width="300"
            />
            <p>{props.trivia}</p>
        </div>
    )
}

export default Camelid;