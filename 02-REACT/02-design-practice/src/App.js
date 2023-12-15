import logo from './logo.svg';
import './App.css';
import TestList from './components/TestList/TestList';
import TestButton from  './components/TestButton/TestButton';
import PersonCard from './components/PersonCard/PersonCard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TestList></TestList>
      <TestButton></TestButton>
      </header>
    </div>
  );
}

export default App;
