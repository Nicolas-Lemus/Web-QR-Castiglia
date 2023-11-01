import React from 'react'
import './Address.css'
import Buttons from "../Buttons/Buttons"
import WhatsApp from "../../images/iconos/icons8-whatsapp-96.webp"
import Facebook from "../../images/iconos/icons8-facebook-96.webp"
import Web from "../../images/iconos/icons8-web-94.webp"
import Instagram from '../../images/iconos/icons8-instagram-96.webp'
import Llamadas from '../../images/iconos/icons8-llamada-100.webp'
import Email from '../../images/iconos/icons8-correo-electrónico-96.webp'

const Address = () => {

const addressWeb ="#"
const addressInstagram = "https://www.instagram.com/castigliaok/"
const addressFacebook = "https://www.facebook.com/castigliaok/"
const addressWhatsApp = "https://wa.me/542634876086?text=Hola%20Castiglia!%20Escribo%20para%20consultarles..."
const addressTel = "tel:02634423186"
const addressEmail = "mailto:ventascastiglia@hotmail.com?subject=Hola Castiglia! Escribo para consultarles...";


return (
    <section className='address'> 

        <Buttons
            namber="Sitio Web" 
            address={addressWeb}
            image={Web}
        />

        <Buttons
            namber="Instagram" 
            address={addressInstagram}
            image={Instagram}
        />

        <Buttons
            namber="Facebook" 
            address={addressFacebook}
            image={Facebook}
        />

        <Buttons
            namber="WhatsApp" 
            address={addressWhatsApp}
            image={WhatsApp}
        /> 

        <Buttons
            namber="Llamadas" 
            address={addressTel}
            image={Llamadas}
        /> 

        <Buttons
            namber="Correo" 
            address={addressEmail}
            image={Email}
        />
    </section>
  )
}
export default Address;
