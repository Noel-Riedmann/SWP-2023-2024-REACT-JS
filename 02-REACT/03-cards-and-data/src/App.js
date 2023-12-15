import logo from './logo.svg';
import './App.css';
import PeopleContainer from './components/PeopleContainer/PeopleContainer';

function App() {
  return (
    <div className="App">
     <PeopleContainer firstname='Noel' lastname='Riedmann' pos="coder" img='https://picsum.photos/200/300'></PeopleContainer>
     <PeopleContainer firstname='Noel' lastname='Riedmann' pos="coder" img='https://picsum.photos/200/300'></PeopleContainer>
     <PeopleContainer firstname='Noel' lastname='Riedmann' pos="coder" img='https://picsum.photos/200/300'></PeopleContainer>
     <PeopleContainer firstname='Noel' lastname='Riedmann' pos="coder" img='https://picsum.photos/200/300'></PeopleContainer>
     <PeopleContainer firstname='Noel' lastname='Riedmann' pos="coder" img='https://picsum.photos/200/300'></PeopleContainer>
     <PeopleContainer firstname='Noel' lastname='Riedmann' pos="coder" img='https://picsum.photos/200/300'></PeopleContainer>


    </div>
  );
}

export default App;
