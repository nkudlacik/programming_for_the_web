export function Animal(props){
    const {animalName, focusSetter, deleteAnimal} = props;

    return(
        <div>
            <p>{animalName}</p>
            <button onClick={() => {
                focusSetter(animalName)
            }}>focus</button> | 
            
            <button onClick={() => {
                deleteAnimal(animalName)
            }}>delete</button>
        </div>
    )
} 