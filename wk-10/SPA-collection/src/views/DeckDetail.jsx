import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

export function DeckDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log("deck", selectedDeck);

    return (
        <div className="deckDetailPage">
            <Link to="/">← back to collection</Link>

            <div className="movementHeader">
                <h1>{selectedDeck.movement}</h1>
                <span className="movementSpan">{selectedDeck.span}</span>
            </div>

            <img src={selectedDeck.image} alt={selectedDeck.movement} />

            <p>
                {selectedDeck.description}
                {selectedDeck.forKids && 
                <span> *for kids</span>}
            </p>

            {selectedDeck.colors.map((color) => {
                return <div key={color} className={clsx(["colorBlock", color])}>{color}</div>
            })}
        </div>
    )
}
DeckDetail.propTypes = {
    data: PropTypes.array
}