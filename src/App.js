import Banner from './components/banner/banner';
import Milkshake from './components/milkshake/milkshake';
import Products from './components/products/products';
import Footer from './components/footer/footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Milkshake/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
