import './App.css';
import gambar1 from './img/image 1.png';
import gambar2 from './img/image 6.png';
import gambar3 from './img/image 2.png';
import Header from './Component/Header';
import Content from './Component/Content';
import mainContent from './Component/MainContent';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Content/> */}
      <mainContent/>
      <header className="App-header">
        <img src={gambar1} alt="image1" />
        <img src={gambar2} alt="image6" />
        <img src={gambar3} alt="image2" />
        <p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <Content/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
