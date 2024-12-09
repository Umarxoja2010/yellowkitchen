
import './App.css';
import Bag from './component/Bag';
import Banner from './component/Banner';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Insta from './component/Insta';
import Limon from './component/Limon';
import Location from './component/Location';
import Map from './component/Map';

function App() {
  return (
    <div className="App">
 <Header/>
 <main>
 <Hero/>
<Banner/>
<Location/>
<Bag/>
<Limon/>
<Map/>
<Insta/>
 </main>
 <Footer/>
    </div>
  )
}

export default App;
