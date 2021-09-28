import React, { createContext, useState, useEffect, useCallback } from 'react';
import items, { propertyIcons } from '../data.js';

const PropertiesContext = createContext();

function PropertiesContextProvider(props) {
  const [properties, setProperties] = useState([]);
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [propertiesIcons, setPropertiesIcons] = useState([]);

  // format contentful data into a simple format
  const formatData = useCallback((items) => {
    const dataItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const property = { ...item.fields, images, id };
      return property;
    });
    return dataItems;
  }, []);
  // function to update the state
  const getData = useCallback(() => {
    const properties = formatData(items);
    const featuredProperties = properties.filter(
      (property) => property.featured === true
    );
    setProperties(properties);
    setFeaturedProperties(featuredProperties);
    setLoading(false);
  }, [formatData]);

  //get icons
  const getIcons = useCallback(() => {
    const tempIcons = propertyIcons;
    setPropertiesIcons(tempIcons);
  }, []);

  // get single property based on the slug passed
  const getSingleProperty = (slug) => {
    let tempProperties = [...properties];

    const newProperty = tempProperties.find(
      (property) => property.slug === slug
    );
    return newProperty;
  };

  useEffect(() => {
    getData();
    getIcons();
  }, [getData, getIcons]);

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        featuredProperties,
        loading,
        getSingleProperty,
        propertiesIcons,
      }}
    >
      {props.children}
    </PropertiesContext.Provider>
  );
}

export { PropertiesContextProvider, PropertiesContext };
