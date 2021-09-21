import React from 'react';
import Title from './Title';
import icons from '../images/sprite.svg';
import { serviceData } from '../data';

function Services() {
  return (
    <section className="services">
      <Title title="Our services" />
      <div className="service">
        {serviceData.services.map((service) => (
          <div className="service__content" key={service.id}>
            <svg class="service__icon">
              <use xlinkHref={`${icons}#${service.serviceIcon}`} />
            </svg>
            <h4 className="service__heading-4">{service.serviceTitle}</h4>
            <p className="service__text">{service.serviceDetails}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
