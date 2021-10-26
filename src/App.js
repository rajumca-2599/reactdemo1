import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/footer';
import Namelist from './components/Namelist';
import Product from './Product';
import Student from './Student';
import Customerfun from './Customerfun';
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Namelist/> */}
      <Customerfun/>
      <Product/>
      <Student/>
     <Footer />
    

    </div>
  );
}

export default App;
