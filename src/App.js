
import "./App.css";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Snowfall from 'react-snowfall'

function App() {
  return (
    <div className="App">
     <Snowfall snowflakeCount={800}/>
    <Navbar />
    <Section/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
 

    </div>
  );
}

export default App;
