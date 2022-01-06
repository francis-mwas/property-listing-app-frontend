import React from 'react'
import icons from '../images/sprite.svg'
import { testmonialData } from '../data'
// import Testmonial1 from '../images/user-6.jpg'
// import Testmonial2 from '../images/user-001.jpeg'
// import Testmonial3 from '../images/user-2.jpg'
// import Testmonial4 from '../images/user-4.jpg'

 function Testmonial(){

    return(
        <section className="testimonials">
            <div className="section-title testimonials__section-title">
                <div className="section-title__text title__text">
                    <h2>Happy customers</h2>
                </div>
                <div className="under-line"></div>
            </div>
            <div className="testimonials__container">
                 {testmonialData.testmonials.map((testmonial) => (
                <div className="testimonials__card" key={testmonial.id}>
                    <img src={testmonial.testmonialImage} alt={testmonial.testmonialTitle} className="testimonials__img" />
                    <svg class="testimonials__icon">
                        <use xlinkHref={`${icons}#${testmonial.testmonialIcon}`} />
                    </svg>
                    <p className="testimonials__text">
                       {testmonial.testmonialDetails}
                    </p>
                    <h4 class="testimonials__title">{testmonial.testmonialTitle}</h4>
                </div>
                 ))}
            </div>
        </section>
        
       
    );
 }

 export default Testmonial;