import './App.css';
import './styles.scss';
//components
import AppRouter from './components/AppRouter/AppRouter';
import { CartProvider } from './components/context/CartContext';

function App() {

  return (//JSX
    <div className="App">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;