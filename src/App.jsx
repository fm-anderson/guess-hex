import { useEffect, useState } from 'react';

//components
import Title from './components/Title';
import Game from './components/Game';
import Points from './components/Points';

//libraries
import JSConfetti from 'js-confetti';
import Congrats from './components/Congrats';
const jsConfetti = new JSConfetti();

function App() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [points, setPoints] = useState(9);

  const createHex = () => {
    return (
      '#' +
      ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(
        -6
      )
    );
  };

  useEffect(() => {
    const rightColor = createHex();
    setColor(rightColor);
    setColors(
      [rightColor, createHex(), createHex()].sort(() => Math.random() - 0.5)
    );
  }, []);

  const handleChoice = (hex) => {
    if (color === hex) {
      setIsIncorrect(false);
      setIsCorrect(true);
      showConfetti();
      setPoints((prevState) => prevState + 1);
    } else {
      setIsCorrect(false);
      setIsIncorrect(true);
      if (points === 0) {
        return;
      } else {
        setPoints((prevState) => prevState - 1);
      }
    }
  };

  const handleReset = () => {
    const rightColor = createHex();
    setColor(rightColor);
    setColors(
      [rightColor, createHex(), createHex()].sort(() => Math.random() - 0.5)
    );
    setIsCorrect(false);
  };

  const showConfetti = async () => {
    jsConfetti.addConfetti({
      confettiColors: [color],
      confettiNumber: 800,
    });
  };

  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-b from-slate-300 to-slate-100 text-slate-900 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
      {points !== 10 && (
        <>
          <Title />
          <Game
            color={color}
            colors={colors}
            isCorrect={isCorrect}
            isIncorrect={isIncorrect}
            handleChoice={handleChoice}
            handleReset={handleReset}
          />
          <Points points={points} />
        </>
      )}

      {points === 10 && <Congrats />}
    </div>
  );
}

export default App;
