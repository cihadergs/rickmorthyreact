import React from "react";

const Sayfalar = ({ sayfaOnce, sayfaSonra, onPrev, onNext }) => {

    const handlePre = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {
                    sayfaOnce ?
                        <li className="page-item">
                            <button className="page-link" onClick={handlePre}>Geri</button>
                        </li>
                        :
                        null
                }
                {
                    sayfaSonra ?
                        <li className="page-item">
                            <button className="page-link" onClick={handleNext}>İleri</button>
                        </li>
                        :
                        null
                }

            </ul>
        </nav>
    )
}

export default Sayfalar