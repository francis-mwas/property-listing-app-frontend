import React from 'react';
import { v4 as uuid } from 'uuid';
import Title from './Title';

const state = {
  services: [
    {
      id: uuid(),
      serviceIcon: 'icon',
      serviceTitle: 'Gardening',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      serviceIcon: 'icon',
      serviceTitle: 'Property management',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      serviceIcon: 'icon',
      serviceTitle: 'Landscaping',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      serviceIcon: 'icon',
      serviceTitle: 'Internet Services',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
  ],
};

function Services() {
  return (
    <section className="services">
      <Title title="Our services" />
      <div className="service">
        {state.services.map((service) => (
          <div className="service__content" key={service.id}>
            {service.icon}
            <h4 className="service__heading-4">{service.serviceTitle}</h4>
            <p className="service__text">{service.serviceDetails}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
