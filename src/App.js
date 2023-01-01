import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    
    <div className="App">
      <header className='App-header'>
          <Nav />

          <Banner fetchUrl={requests.fetchNetflixOriginals} />
      </header>

      <div>
        <Row
          isLargeRow={true}
          title="Netflix Originals:" 
          fetchUrl={requests.fetchNetflixOriginals} 
        />
        <Row title="Trendings:" fetchUrl={requests.fetchTrending} />
        <Row title="TopRated:" fetchUrl={requests.fetchTopRated} />
        <Row title="ActionMovies:" fetchUrl={requests.fetchActionMovies} />
        <Row title="ComedyMovies:" fetchUrl={requests.fetchComedyMovies} />
        <Row title="HorrorMovies:" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="RomanceMovies:" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries:" fetchUrl={requests.fetchDocumentaries} />
      </div>

    </div>
  );
}

export default App;
