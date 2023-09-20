import React, { useState } from 'react';

function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);

    if (!isNaN(parsedA) && !isNaN(parsedB)) {
      const calculatedResult = ((parsedA - parsedA * 0.18) - (80 * parsedB)) * 0.0125;
      setResult(calculatedResult.toFixed(2)); // Round the result to 2 decimal places
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="bg-blue-500 text-white p-4">
      <h1>Net Profit Calculator</h1>
      <div>
        <label htmlFor="inputA">Enter a value for Total Sell Price</label>
        <br></br>
        <input
          type="text"
          id="inputA"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="inputB">Enter a value for Total Pauk Thee</label>
        <br></br>
        <input
          type="text"
          id="inputB"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <br></br>
      <button onClick={calculateResult}> _$_ </button>
      <div>
        <h2>Result:</h2>
        <p id='result'>{result}</p>
      </div>
    </div>
  );
}

export default Calculator;
