import { useEffect, useState } from "react";
import { Container, Contains, Header, Info, Logo } from "./App.styled";
import { Button } from "./components/Button";
import { CardPokemon } from "./components/CardPokemon";
import { GameInfo } from "./components/GameInfo";
import { pokemons } from "./data/pokemons";
import { formatTime } from "./helpers/formatTime";
import { PokeGridType } from "./types/PokeGridType";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [pokeGrid, setPokeGrid] = useState<PokeGridType[]>([]);

  useEffect(() => handleResetGame(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setElapsedTime(elapsedTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, elapsedTime]);

  useEffect(() => {
    if (
      moveCount > 0 &&
      pokeGrid.every((itens) => itens.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount, pokeGrid]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = pokeGrid.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tempPokeGrid = [...pokeGrid];
          for (let i in tempPokeGrid) {
            if (tempPokeGrid[i].shown) {
              tempPokeGrid[i].permanentShown = true;
              tempPokeGrid[i].shown = false;
            }
          }
          setPokeGrid(tempPokeGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let tempPokeGrid = [...pokeGrid];
            for (let i in tempPokeGrid) {
              tempPokeGrid[i].shown = false;
            }
            setPokeGrid(tempPokeGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount + 1);
      }
    }
  }, [shownCount, pokeGrid]);

  const handleResetGame = () => {
    setElapsedTime(0);
    setMoveCount(0);
    setShownCount(0);

    let tempPokeGrid: PokeGridType[] = [];
    for (let i = 0; i < pokemons.length * 2; i++)
      tempPokeGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });

    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < pokemons.length; i++) {
        let pos = -1;
        while (pos < 0 || tempPokeGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (pokemons.length * 2));
        }
        tempPokeGrid[pos].item = i;
      }
    }

    setPokeGrid(tempPokeGrid);
    setPlaying(true);
  };

  const handleCardClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tempGrid = [...pokeGrid];

      if (
        tempGrid[index].shown === false &&
        tempGrid[index].permanentShown === false
      ) {
        tempGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      setPokeGrid(tempGrid);
    }
  };

  return (
    <Container>
      <Header>
        <Logo src="./assets/logo.png" />
        <Info>
          <Button
            label="Reiniciar"
            icon="./assets/pokeball.svg"
            onClick={handleResetGame}
          />
          <GameInfo label="Tempo" value={formatTime(elapsedTime)} />
          <GameInfo label="Movimentos" value={String(moveCount)} />
        </Info>
      </Header>

      <Contains>
        {pokeGrid.map((item, index) => (
          <CardPokemon
            key={index}
            item={item}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </Contains>
    </Container>
  );
};

export default App;
