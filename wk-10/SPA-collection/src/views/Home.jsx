import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import {NewMovementForm} from "../NewMovementForm/NewMovementForm";
import {useState} from "react";
import {nanoid} from "nanoid";
import deckData from "../assets/deck-data.json";

export function Home() {
  const [designDecks, setDesignDecks] = useState(deckData);

  function addDesignDeck(data) {
    const newDeck = {
      movement: data.movement,
      image: data.image,
      colors: data.colors || [],
      forKids: !!data.forKids,
      span: data.span || "",
      description: "",
      id: nanoid(6)
    };

    setDesignDecks([...designDecks, newDeck]);
  }

  function deleteCard(id) {
    const updated = designDecks.filter(deck => deck.id !== id);
    setDesignDecks(updated);
  }

  function duplicateCard(id) {
    const match = designDecks.find(deck => deck.id === id);
    if (!match) return;

    const copy = { ...match, id: nanoid() };
    setDesignDecks([...designDecks, copy]);
  }

  return (
    <div className="page">
      <Masthead />

      <div className="collection">
        {designDecks.map((deck) => (
          <ItemCard
            key={deck.id}
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...deck}
          />
        ))}
      </div>
    </div>
  );
}