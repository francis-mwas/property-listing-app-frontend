import React from 'react';
import { Link } from 'react-router-dom';
import icons from '../images/sprite.svg';

function LatestPropertiesListings({ properties, propertiesIcons }) {
  const { propIcons } = propertiesIcons;

  const propertyIcon = propIcons.map((propertyIcon) => propertyIcon);

  const propertyListing = properties.map((property) => (
    <div className="property-details__side-content" key={property.id}>
      <div className="property-details__side-image">
        <Link to={`/properties/${property.slug}`}>
          <img
            src={property.images[0]}
            className="property-details__side-image--item"
            alt={property.propertyTitle}
          />
        </Link>
      </div>
      <div className="property-details__side--text-content">
        <h4 className="property-details__side--title">
          <svg className="property-details__side--icon">
            <use xlinkHref={`${icons}#${propertyIcon[5].icon_office}`} />
          </svg>
          {property.propertyTitle.substring(0, 15)}..
        </h4>
        <h4 className="property-details__side--price">
          <svg className="property-details__side--icon">
            <use xlinkHref={`${icons}#${propertyIcon[0].icon_dollar}`} />
          </svg>
          {property.price}
        </h4>
        <h4 className="property-details__side--location">
          <svg className="property-details__side--icon">
            <use xlinkHref={`${icons}#${propertyIcon[4].icon_location}`} />
          </svg>
          {property.location}
        </h4>
      </div>
    </div>
  ));
  return (
    <div className="property-details__side">
      <h4 className="property-details__content-details--desc-title">
        {propertyListing.slice(0, 5)}
      </h4>
    </div>
  );
}

export default LatestPropertiesListings;
