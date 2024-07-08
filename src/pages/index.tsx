import { Inter } from 'next/font/google';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] });
import { Dice } from '@/components/Dice';
import { Settings } from '@/components/Settings';
export default function Home() {
  const [isInSettings, toggleIsInSettings] = useState(false);
  const [nbDice, setNbDice] = useState(1);
  const [diceType, setDiceType] = useState(6);
  return (
    <main>
      {isInSettings ? (
        <Settings
          nbDice={nbDice}
          setNbDice={setNbDice}
          diceType={diceType}
          setDiceType={setDiceType}
          toggleIsInSettings={toggleIsInSettings}
        />
      ) : (
        <Dice
          nbDice={nbDice}
          diceType={diceType}
          toggleIsInSettings={toggleIsInSettings}
        />
      )}
    </main>
  );
}
