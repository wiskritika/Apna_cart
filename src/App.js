
import logo from './logo.svg';
import './App.css';
import Navbar from './Compnents/NavBar';
import ProductList from './Compnents/ProductList';



function App() {
  const product = [
    {
      price : 99999, 
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price : 9999, 
      name: "Redmi Note 10s Max",
      quantity: 0,
    }

  ]
  return (
    <>
    <Navbar/>
    <ProductList product = {product} />
    
    </>
  );
}

export default App;
