import { useEffect, useState } from 'react';
import './App.css';
import { months } from './constants';

const shuffle = (array: number[]): number[] => {
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
};

const getOneToTwelve = (): number => Math.floor(Math.random() * 12 + 1);

function App() {
  const [randomIndex, setRandomIndex] = useState(1);

  const generateNext = () => {
    setRandomIndex(getOneToTwelve());
  };

  const getQuizOptions = (): number[] =>
    shuffle([getOneToTwelve(), getOneToTwelve(), randomIndex]);

  const renderRandomMonthNames = () => {
    const randomMonth = months[randomIndex as keyof typeof months];

    return (
      <div>
        {randomMonth.en} / {randomMonth.lt}
      </div>
    );
  };

  useEffect(() => {
    setRandomIndex(getOneToTwelve());
  }, []);

  return (
    <div className='grid h-screen place-items-center'>
      <div className='flex flex-col items-center gap-2  self-center text-center'>
        {renderRandomMonthNames()}
        {getQuizOptions().map((monthNumber) => {
          return monthNumber === randomIndex ? (
            <div
              className='w-52 rounded-full bg-sky-500 hover:bg-sky-700'
              onClick={generateNext}
            >
              {monthNumber}
            </div>
          ) : (
            <div className='w-52 rounded-full bg-sky-500 hover:bg-sky-700'>
              {monthNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
