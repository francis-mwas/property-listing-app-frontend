import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import BannerHero from '../components/BannerHero';
import { PropertiesContext } from '../context/properties.context';
import Navbar from '../components/Navbar';
import defaultImg from '../images/apart-8.jpg';
import DynamicBanner from '../components/DynamicBanner';
import PropertiesGallery from '../components/PropertiesGallery';
import PropertyDetails from '../components/PropertyDetails';
import HeaderTitle from '../components/HeaderTitle';
import ShareIcons from '../components/ShareIcons';
import LatestPropertiesListings from '../components/LatestPropertyListings';

function SingleProperty() {
  const { getSingleProperty, propertiesIcons, properties } =
    useContext(PropertiesContext);

  let { slug } = useParams();
  const property = getSingleProperty(slug);
  if (!property) {
    return (
      <div className="error">
        <h3>no such room could be found..</h3>
        <Link to="/" className="banner__btn">
          Back to homes
        </Link>
      </div>
    );
  }
  const { propertyTitle, price, location, images, description } = property;
  const [mainImg] = images;
  console.log(images);
  return (
    <div className="single-listing">
      <Navbar />
      <DynamicBanner img={mainImg || defaultImg}>
        <BannerHero title={propertyTitle}>
          <Link to="/" className="banner__btn">
            Back to homes
          </Link>
        </BannerHero>
      </DynamicBanner>
      <section className="single-property-images">
        <div className="single-property-images__header">
          <HeaderTitle
            title={propertyTitle}
            location={location}
            price={price}
          />
          <div className="header__share">
            <h4> share this property with friends and family on</h4>
            <ShareIcons />
          </div>
        </div>
        <PropertiesGallery images={images} description={description} />
      </section>
      <section className="property-details">
        <PropertyDetails
          property={property}
          propertiesIcons={propertiesIcons}
        />
        <LatestPropertiesListings
          properties={properties}
          propertiesIcons={propertiesIcons}
        />
      </section>
    </div>
  );
}

export default SingleProperty;
