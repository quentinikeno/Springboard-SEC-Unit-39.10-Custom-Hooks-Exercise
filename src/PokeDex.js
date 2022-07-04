import React from "react";
import useAxios from "./hooks/useAxios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
	const dataFormatter = (data) => {
		const {
			id,
			sprites: { front_default: front },
			sprites: { back_default: back },
			name,
		} = data;
		const stats = data.stats.map((singleStat) => {
			const {
				stat: { name },
				base_stat: value,
			} = singleStat;
			return { name, value };
		});
		return { id, front, back, name, stats };
	};
	const [pokemon, addPokemon, removePokemon] = useAxios(
		"https://pokeapi.co/api/v2/pokemon",
		dataFormatter
	);
	return (
		<div className="PokeDex">
			<div className="PokeDex-buttons">
				<h3>Please select your pokemon:</h3>
				<PokemonSelect add={addPokemon} remove={removePokemon} />
			</div>
			<div className="PokeDex-card-area">
				{pokemon.map((cardData) => (
					<PokemonCard
						key={cardData.id}
						front={cardData.front}
						back={cardData.back}
						name={cardData.name}
						stats={cardData.stats}
					/>
				))}
			</div>
		</div>
	);
}

export default PokeDex;
