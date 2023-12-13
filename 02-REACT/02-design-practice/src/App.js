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
      <PersonCard name="Noel Riedmann" title="HTL Student & Webdeveloper" img="https://www.w3schools.com/howto/img_avatar.png"></PersonCard>
      </header>
    </div>
  );
}

export default App;
