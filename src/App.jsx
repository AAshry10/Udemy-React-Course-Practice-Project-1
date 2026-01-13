import { useState } from 'react';
import Header from './Components/Header/Header';
import InputFields from './Components/InputFields/InputFields';
import Results from './Components/Results/Results';

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInputs.duration >= 1;

  function handleChange(inputIdentfier, newValue) {
    setUserInputs(prevUserInputs => {
      return {
        ...prevUserInputs,
        [inputIdentfier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <InputFields userInputs={userInputs} handleChange={handleChange} />
      {!isValidInput && <p className="center">Duration Couldn't Be Zero !</p>}
      {isValidInput && <Results userInputs={userInputs}/>}
    </>
  )
}

export default App
