import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';

import Sayfalar from './Sayfalar';
import Episodlar from './Episodlar';

function BölümSayfa() {


    const [episodess, setEpisode] = useState([]);
    const [info, setInfo] = useState({});

    const urlepisod = "https://rickandmortyapi.com/api/episode"




    const BölümleriGetir = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setEpisode(data.results);
                setInfo(data.info)
            })
            .catch(error => console.error())
    };



    const onPrev = () => {
        BölümleriGetir(info.prev);
    }

    const onNext = () => {
        BölümleriGetir(info.next);
    }


    useEffect(() => {
        BölümleriGetir(urlepisod);
    }, [])


    return (
        <>
            <Navbar brand="Rick and Morthy Proje" />
            <div className="container mt-5">
                <Sayfalar sayfaOnce={info.prev} sayfaSonra={info.next} onPrev={onPrev} onNext={onNext} />
                <Episodlar bölümler={episodess} />
                <Sayfalar sayfaOnce={info.prev} sayfaSonra={info.next} onPrev={onPrev} onNext={onNext} />
            </div>
        </>
    );
}


export default BölümSayfa;