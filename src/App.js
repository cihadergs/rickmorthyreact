import React, { useEffect, useState } from 'react';




import Navbar from './components/Navbar';
import Karakterler from './components/Karakterler'
import Sayfalar from './components/Sayfalar';
import Episodlar from './components/Episodlar';
import GetirFonk from './components/GetirFonk';

function App() {

  const [bölümlerss, setBölüm] = useState([]);
  const [karakterss, setKarakter] = useState([]);
  const [info, setInfo] = useState({});
  const [result, setResults] = useState([]);

  const initurl = "https://rickandmortyapi.com/api/character"
  const url2 = "https://rickandmortyapi.com/api/episode"



  const karakterGetir = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setKarakter(data.results);
        setInfo(data.info)
      })
      .catch(error => console.error())
  };

  const bölümfonk = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setBölüm(data.results);
        setInfo(data.info)
      })
      .catch(error => console.error())
  };




  /*const onPrev = () => {
    karakterGetir(info.prev);

  }*/

  const onPrev = () => {
    bölümfonk(info.prev);
  }
  /*const onNext = () => {
    karakterGetir(info.next);
  }*/

  const onNext = () => {
    bölümfonk(info.next);
  }

  useEffect(() => {
    karakterGetir(initurl);
  }, [])

  useEffect(() => {
    bölümfonk(url2);
  }, [])



  return (
    <>
      <Navbar brand="Rick and Morthy Proje" />

      <div className="container mt-5">
        <Sayfalar sayfaOnce={info.prev} sayfaSonra={info.next} onPrev={onPrev} onNext={onNext} />
        <Episodlar bölümler={bölümlerss} />
        <Sayfalar sayfaOnce={info.prev} sayfaSonra={info.next} onPrev={onPrev} onNext={onNext} />

      </div>

      <div className="container mt-7">
        <h3 className="header mb-5">Karakterler</h3>
        <Karakterler karakterler={karakterss} />
      </div>

      <div className="container mt-7">
        <h3 className="header mb-5">Karakter on Episode</h3>
        <GetirFonk result={setResults} />
      </div>

    </>
  );
}

export default App;
