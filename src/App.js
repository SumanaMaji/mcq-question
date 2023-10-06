import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import FlatListDropDown from './pages/FlatListDropDown';
import Multipleselect from './pages/Multipleselect';
import ProductsPage from './pages/ProductsPage';
import Functions from './pages/Functions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <List />
      <FlatListDropDown />
      <Multipleselect />
      <ProductsPage />
      <Functions />
    </div>
  );
}

export default App;
