import React from "react";



const KarakterFonk = ({ karakterler = [], }) => {
    return (
        <div className="row">
            {karakterler.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minWidth: "200px" }}>
                        <img src={item.image} alt="" />
                        <div className="card-boby">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                            <p>Tür: {item.species}</p>
                            <p>Konum: {item.location.name}</p>
                            <p>Cinsiyet: {item.gender}</p>
                            <a href={item.url}>Urlsi: {item.url}</a>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KarakterFonk