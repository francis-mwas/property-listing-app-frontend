import React from 'react'
import FooterLogo from './FooterLogo'
import FooterQuickLinks from './FooterQuickLinks'
import FooterSocialICons from './FooterSocialIcons'

function Footer () {
    
    return (
        <footer className='footer'>
            <div className='footer__content' > 
                <FooterLogo />
                <FooterQuickLinks />
                <FooterSocialICons />
            </div>   
        </footer>
    )
}

export default Footer
