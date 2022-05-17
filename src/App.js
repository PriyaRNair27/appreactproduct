import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Productentry from './Components/Productentry';
import Search from './Components/Search';

function App() {
  return (
    <div>
  <Productentry/>
  <Search/>
    </div>
  );
}

export default App;
