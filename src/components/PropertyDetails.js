import icons from '../images/sprite.svg';

function PropertyDetails({ propertiesIcons, property }) {
  const {
    propertyTitle,
    price,
    location,
    rooms,
    size,
    beds,
    bathRooms,
    description,
    otheAmenities,
  } = property;
  const { propIcons } = propertiesIcons;

  const propertyIcon = propIcons.map((propertyIcon) => propertyIcon);
  const [icon_dollar, icon_expand, icon_shower, icon_bed, icon_location] =
    propertyIcon;
  const amenities = otheAmenities.map((amenity, index) => (
    <ul className="property-details__amenities-list">
      <li key={index} className="property-details__amenities-list--item">
        {amenity}
      </li>
    </ul>
  ));
  return (
    <section className="property-details">
      <div className="property-details__content-details">
        <div className="property-details__card-features">
          <div className="card-features__price">
            <svg class="card-features__icon">
              <use xlinkHref={`${icons}#${icon_dollar.icon_dollar}`} />
            </svg>
            <p className="card-features__icon--text">Ksh {price}</p>
          </div>
          <div className="card-features__size">
            <svg class="card-features__icon">
              <use xlinkHref={`${icons}#${icon_expand.icon_expand}`} />
            </svg>
            <p className="card-features__icon--text">
              {size} m<sup>2</sup>
            </p>
          </div>
          <div className="card-features__rooms">
            <svg class="card-features__icon">
              <use xlinkHref={`${icons}#${icon_shower.icon_shower}`} />
            </svg>
            <p className="card-features__icon--text">{bathRooms} Bath rooms</p>
          </div>
          <div className="card-features__beds">
            <svg class="card-features__icon">
              <use xlinkHref={`${icons}#${icon_bed.icon_bed}`} />
            </svg>
            <p className="card-features__icon--text">{beds} Bed rooms</p>
          </div>
          <div className="card-features__location">
            <svg class="card-features__icon">
              <use xlinkHref={`${icons}#${icon_location.icon_location}`} />
            </svg>
            <p className="card-features__icon--text">{location}</p>
          </div>
        </div>
        <h4 className="property-details__content-details--desc-title">
          Property Description
        </h4>
        <div class="property-details__text">{description}</div>
        <h4 class="property-details__content-details--desc-title">
          Other Amenities
        </h4>
        <div class="property-details__amenities">{amenities}</div>
      </div>
    </section>
  );
}

export default PropertyDetails;
