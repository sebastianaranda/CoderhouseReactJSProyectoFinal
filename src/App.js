import './App.css';
import './styles.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (//JSX
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;