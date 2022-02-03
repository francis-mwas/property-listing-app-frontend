import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/main-logo-3.png';

function FooterLogo () {
    return(
        <div className='footer__card footer__card--left' >
            <Link to="">
            <img className="footer__logo--img" src={Logo} alt="Logo" />
            </Link>
            <p className='footer__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aperiam odiomaiores dolo.</p>
            <h5 className='footer__copyright'>&copy; 2021 osotuahomes</h5>
        </div>
      

    )

}
 export default FooterLogo;