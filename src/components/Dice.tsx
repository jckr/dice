import { useEffect, useState } from 'react';
type DiceProps = {
  diceType: number;
  nbDice: number;
  toggleIsInSettings: (target: boolean) => void;
};

export const Dice = (props: DiceProps) => {
  const { diceType, nbDice, toggleIsInSettings } = props;
  const [results, setResults] = useState<number[]>([]);
  useEffect(() => {
    setResults(roll(diceType, nbDice));
  }, [nbDice, diceType]);
  return (
    <section>
      <div className='align-right'>
        <button className='settings' onClick={() => toggleIsInSettings(true)}>
          Settings
        </button>
      </div>
      <button
        className='dice'
        onClick={() => setResults(roll(diceType, nbDice))}
      >
        {results.map(String).join(' ')}
      </button>
    </section>
  );
};

function roll(diceType: number, nbDice: number) {
  return new Array(nbDice)
    .fill(0)
    .map((d) => Math.ceil(Math.random() * diceType) % 10);
}
