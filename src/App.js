import './App.css';
import './styles.scss';
//components
import AppRouter from './components/AppRouter/AppRouter';
import CartContext from './components/context/CartContext';

function App() {

  return (//JSX
    <div className="App">
      <CartContext.Provider value={[]}>
        <AppRouter />
      </CartContext.Provider>
    </div>
  );
}

export default App;