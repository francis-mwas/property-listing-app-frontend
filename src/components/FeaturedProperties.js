import React, { useContext } from 'react';
import { PropertiesContext } from '../context/properties.context';
import Title from './Title';
import Property from '../components/Property';
import Loading from './Loading';

function FeaturedProperties() {
  let { loading, featuredProperties } = useContext(PropertiesContext);

  featuredProperties = featuredProperties.map((property) => {
    return <Property key={property.id} property={property} />;
  });

  return (
    <div className="apartments">
      <div className="innner-container">
        <Title title="Featured Apartments" />
        <div className="inner-content">
          {loading ? <Loading /> : featuredProperties}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
