import React from 'react';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faGithub, faDiscord, faVk, faPatreon } from '@fortawesome/free-brands-svg-icons'
import JetBrains from '../assets/jb_beam.png';

const brandButton = "btn btn-outline-light btn-floating m-1"

function Footer() {
    return (
        <Container fluid className='p-0'>
            <Container className='text-center p-2'>
                <a className={brandButton} href="#!" role="button"><FontAwesomeIcon icon={faYoutube} /></a>
                <a class={brandButton} href="#!" role="button"><FontAwesomeIcon icon={faTwitch} /></a>
                <a class={brandButton} href="#!" role="button"><FontAwesomeIcon icon={faDiscord} /></a>
                <a class={brandButton} href="#!" role="button"><FontAwesomeIcon icon={faVk} /></a>
                <a class={brandButton} href="#!" role="button"><FontAwesomeIcon icon={faGithub} /></a>
                <a class={brandButton} href="#!" role="button"><FontAwesomeIcon icon={faPatreon} /></a>
            </Container>
            <Container className='text-center mb-2'>
                <a className="navbar-brand" href="https://jb.gg/OpenSourceSupport">
                    
                    <img src={JetBrains} alt="jb" width="45" height="45" class="" />{' '}
                    With support of JetBrains Open-source Support program
                </a>
            </Container>
            <Container fluid className='text-center' style={{backgroundColor: 'black'}}>
                © 2023 Copyright: 723Studio
            </Container>
        </Container>
    )
}

export default Footer