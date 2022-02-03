import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from '../data'

function FooterQuickLinks(){
    
        return (
             <div className="footer__card footer__card--center">
                    <h4 className="footer__header--text">Quick Links</h4>
                    <div className="under-line footer__underline"></div>
                    {footerLinks.links.map((link) => (
                    <Link to={`${link.footerLink}`} className="footer__item--link">
                    <ul className="footer__items" >
                       <li className="footer__item">{link.title}</li>
                    </ul>
                    </Link>
                    ))}
                </div>

             
    )
}

export default FooterQuickLinks;