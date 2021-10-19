import './App.css';
import ImgLobo from './img_meio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Home</h3>
        <h3>Perfil</h3>
      </header>
      <div className="container">

          <div className="box_cima">
            <h1>Galeria de imagens</h1>
            <p>Aqui você encontra as imagens mais diversas.</p>
            
          </div>
          <div className="box_meio">
            <div className="cont_img">
              <ImgLobo/>
              <ImgLobo/>
              <ImgLobo/>
            </div>
          </div>
          <div className="box_baixo">
            <h3>Galeria</h3>
            <p>As mais belas imagens</p>
            <p>copyright © Hentony 2021.</p>
          </div>

      </div>

    </div>
  );
}

export default App;
