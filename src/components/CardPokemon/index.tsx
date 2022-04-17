import { pokemons } from "../../data/pokemons";
import { PokeGridType } from "../../types/PokeGridType";
import { Card, Container } from "./styles";

interface CardPokemonProps {
  item: PokeGridType;
  onClick: () => void;
}

export const CardPokemon = ({ item, onClick }: CardPokemonProps) => {
  return (
    <Container
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {(item.permanentShown || item.shown) && item.item !== null && (
        <Card src={pokemons[item.item].image} alt="" />
      )}
      {item.permanentShown === false && item.shown === false && (
        <Card
          src="./assets/pokeballcard.svg"
          alt=""
          sownCard={!item.permanentShown || !item.shown}
        />
      )}
    </Container>
  );
};
