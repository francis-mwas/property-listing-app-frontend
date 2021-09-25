import React from 'react';
import { Link } from 'react-router-dom';

function Property({ property }) {
  const { images, propertyTitle, price, location, rooms, description, slug } =
    property;
  return (
    <div className="apartment">
      <Link to={`/properties/${slug}`}>
        <img src={images[0]} alt="Apartment 1" className="apartment__img" />
      </Link>
      <h4 className="apartment__title">{propertyTitle}</h4>
      <h4 className="apartment__price">
        Price: <span className="left">{price}</span>
      </h4>
      <h4 className="apartment__location">
        Location: <span className="left">{location}</span>
      </h4>
      <h4 className="apartment__rooms">
        Rooms: <span className="left rooms_back">{rooms}</span>
      </h4>
      <p className="apartment__text">{description.substring(0, 195)}...</p>
    </div>
  );
}

export default Property;
