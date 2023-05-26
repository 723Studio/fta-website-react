import React from "react";
import { Container } from "react-bootstrap";
// import globe from '../assets/globe.jpg'

const ParalaxBox = () => {
    return (
        <>
        <Container fluid className="custom-bg">
            <Container className="pt-5 pb-5">
                <h1 className="fw-bold p-2">Legend continues</h1>
                <p className="subhead fs-4 mb-0 p-2">The X-Com initiative failed, with alien agents infiltrating the governments of most major powers. The organization's base is in disrepair due to lack of funding. Most of the personnel are fired or dead. To win, the player will have to revive X-Com from the ashes...</p>
            </Container>
        </Container>
        </>
        
    )
}

export {ParalaxBox}