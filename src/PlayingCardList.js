import React from "react";
import useAxios from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
	const dataFormatter = (data) => {
		const { id } = data;
		const { image } = data.cards[0];
		return { id, image };
	};
	const [cards, addCard, resetCards] = useAxios(
		"https://deckofcardsapi.com/api/deck/new/draw/",
		dataFormatter
	);
	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={() => addCard()}>Add a playing card!</button>
				<button onClick={resetCards}>Remove all cards!</button>
			</div>
			<div className="PlayingCardList-card-area">
				{cards.map((cardData) => (
					<PlayingCard key={cardData.id} front={cardData.image} />
				))}
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
