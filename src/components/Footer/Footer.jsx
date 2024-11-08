import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import "../Footer/Footer.css"

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <div >
                <div>
                    <h2 className="Copyright">©Copyright - 2024 German Martini</h2>
                </div>
            </div>
            <div class="redes">
                <FaInstagram />
                <FaFacebook />
                <FaGithub />
                <FaWhatsapp />
            </div>
        </footer>
    )
}

export default Footer