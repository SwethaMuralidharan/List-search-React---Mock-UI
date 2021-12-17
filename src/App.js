import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import PRODUCTS from './products';

function App() {
  return (
    <div className="App">
      <h1>List Search in React</h1>
     <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
