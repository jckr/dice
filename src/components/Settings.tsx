type SettingsProps = {
  diceType: number;
  nbDice: number;
  setDiceType: (diceType: number) => void;
  setNbDice: (nbDice: number) => void;
  toggleIsInSettings: (target: boolean) => void;
};

export const Settings = (props: SettingsProps) => {
  const { diceType, nbDice, setNbDice, setDiceType, toggleIsInSettings } =
    props;
  return (
    <section>
      <div>
        <h1>Settings</h1>
        <h2>Number of dice</h2>
        <div>
          {[1, 2, 3].map((i) => (
            <>
              <input
                type='radio'
                name='nbDice'
                key={`nb-dice-${i}`}
                value={`${i}`}
                id={`nb-dice-${i}`}
                onChange={(e) => setNbDice(Number(e.target.value))}
                checked={i == nbDice}
              />
              <label htmlFor={`nb-dice-${i}`}>{i}</label>
            </>
          ))}
        </div>
        <h2>Type of dice</h2>
        <div>
          {[6, 10].map((i) => (
            <>
              <input
                type='radio'
                name='diceType'
                key={`dice-type-${i}`}
                value={`${i}`}
                id={`dice-type-${i}`}
                onChange={(e) => setDiceType(Number(e.target.value))}
                checked={i == diceType}
              />
              <label htmlFor={`dice-type-${i}`}>{`${i} sides`}</label>
            </>
          ))}
        </div>
      </div>

      <button onClick={() => toggleIsInSettings(false)}>OK</button>
    </section>
  );
};
