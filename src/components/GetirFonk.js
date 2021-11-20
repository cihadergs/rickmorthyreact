import React, { useEffect, useState } from 'react'

const GetirFonk = () => {
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [result, setResults] = useState([]);
    let api = 'https://rickandmortyapi.com/api/episode/${id}';

    useEffect(() => {

        (async function () {
            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let a = await Promise.all(data.characters.map((x) => {
                return fetch(x).then((res) => res.json());
            }));
            setResults(a);
        })();

    }, [api]);

    return <div>{result}</div>
};

export default GetirFonk;