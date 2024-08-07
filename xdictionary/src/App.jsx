import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [meaning, setMeaning] = useState("");
  const dictionaryData = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleMeanings = (e) => {
    e.preventDefault();
    const foundWord = dictionaryData.find(
      (entry) => entry.word.toLowerCase() === inputData.toLowerCase()
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
    } else {
      setMeaning("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <div>
        <form onSubmit={handleMeanings}>
          <input
            type="text"
            placeholder="Search for a word..."
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        <h2>Definition:</h2>
        <p>{meaning}</p>
      </div>
    </>
  );
}

export default App;
