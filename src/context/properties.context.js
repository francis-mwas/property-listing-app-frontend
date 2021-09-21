import React, { createContext, useState, useEffect } from 'react';
import items from '../data.js';

export const PropertiesContext = createContext();

export function PropertiesContextProvider(props) {
  const [properties, setProperties] = useState([]);
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatData = (items) => {
    const dataItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const property = { ...item.fields, images, id };
      return property;
    });
    return dataItems;
  };

  useEffect(() => {
    const properties = formatData(items);
    const featuredProperties = properties.filter(
      (property) => property.featured === true
    );
    setProperties(properties);
    setFeaturedProperties(featuredProperties);
    setLoading(false);
  }, [setProperties, setFeaturedProperties, setLoading]);

  return (
    <PropertiesContext.Provider
      value={{ properties, featuredProperties, loading }}
    >
      {props.children}
    </PropertiesContext.Provider>
  );
}
