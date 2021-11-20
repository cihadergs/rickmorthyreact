import React from "react";


const BölümleriGetir = ({ bölümler = [] }) => {
    return (
        <div className="row">
            {bölümler.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth: "200px" }}>

                        <div className="card-boby">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Yayın Tarihi: {item.air_date}</p>
                            <p>Kod: {item.episode}</p>
                            <a href={item.url}>URLsi: {item.url}</a>
                            <p>Karakter: {[item.characters]}</p>


                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BölümleriGetir