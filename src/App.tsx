import React, { useEffect, useState } from 'react';
import './App.css';

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

function shuffle(array: number[]) {
  const newArray = [...array];
  const length = newArray.length;

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor(
      (newArray.length - start) * Math.random()
    );
    const randomItem = newArray.splice(randomPosition, 1);

    newArray.push(...randomItem);
  }

  return newArray;
}

const getOneToTwelve = (): number => Math.floor(Math.random() * 12 + 1);

function App() {
  const [randomIndex, setRandomIndex] = useState(0);

  const generateNext = () => {
    setRandomIndex(getOneToTwelve());
  };

  const getQuizOptions = (): Array<number> =>
    shuffle([getOneToTwelve(), getOneToTwelve(), randomIndex]);

  const getRandomMonth = () => {
    return months[randomIndex as keyof typeof months];
  };

  useEffect(() => {
    setRandomIndex(getOneToTwelve());
  }, []);

  return (
    <div className='App'>
      {getRandomMonth()}
      <ul>
        {getQuizOptions().map((nr) => {
          return nr === randomIndex ? (
            <li onClick={generateNext}>{nr}</li>
          ) : (
            <li>{nr}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
