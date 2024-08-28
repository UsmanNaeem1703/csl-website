import React from 'react'
import { Container } from 'react-bootstrap'
import './Exectives.css';

import technical from "./images/Ahmad.png";
import joint from "./images/Ammar.png";
import creatives from "./images/Aneeqa.png";
import operations from "./images/vania.png";
import events from "./images/Moarij.png";
import informations from "./images/Muhammad Talha.png";
import marketing from "./images/haseeb.png";

function Exectives() {
    return (
        <div className='exectives-main mb-4'>
            <Container>
                <div className='d-flex flex-row justify-content-evenly flex-wrap'>
                    <div className="view-image text-center">
                        <img src={technical} alt="Technical Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Technical Sec. </h5>
                    </div>
                    <div className="view-image text-center">
                        <img src={joint} alt="Joint Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Joint Sec. </h5>
                    </div>
                    <div className="view-image text-center">
                        <img src={creatives} alt="Creatives Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Creatives Sec. </h5>
                    </div>
                    <div className="view-image text-center">
                        <img src={operations} alt="Operations Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Operations Sec. </h5>
                    </div>
                    <div className="view-image text-center">
                        <img src={events} alt="Events Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Events Sec. </h5>
                    </div>
                    <div className="view-image text-center">
                        <img src={informations} alt="Informations Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Informations Sec. </h5>
                    </div>
                    <div className="view-image text-center">
                        <img src={marketing} alt="Marketing Secretary" className="rounded-circle img-fluid" />
                        <h5 className="mt-3">Marketing Sec. </h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Exectives