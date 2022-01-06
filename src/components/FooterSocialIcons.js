import React from 'react'
import icons from '../images/sprite.svg';
import { shareIcons } from '../data'
import { Link } from 'react-router-dom';
function FooterSocialIcons (){

    return (
        <div className="footer__card footer__card--right">
                    <h4 className="footer__header--text">Social with us</h4>
                    <div className="under-line footer__underline"></div>
                    <div className="footer__social--icons">
                    {shareIcons.icons.map((icon) => (
                    <div className="footer__icon" key={icon.id}> 
                    <Link to={`${icon.linkIcon}`}>
                            <svg className="footer__icon--link">
                                <use xlinkHref={`${icons}#${icon.shareIcon}`} />
                            </svg>
                    </Link>
                    </div>
                        ))}
                    
    
                </div>
            </div>
    )
}
export default FooterSocialIcons;