import allWords from './assets/fiveLettersOnly.json'

import Home from './views/Home/Home'


function App() {
  return (
    <Home allWords={allWords} />
  );
}

export default App;
