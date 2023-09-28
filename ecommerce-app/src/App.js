import MediaCard from './components/ProductCard';
import './App.css';
import DrawerAppBar from './components/AppBar';
import Home from './containers/Home';


function App() {
  return (
    <>
    <DrawerAppBar/>
    <MediaCard/>
   <Home/>
    </>
  );
}

export default App;
