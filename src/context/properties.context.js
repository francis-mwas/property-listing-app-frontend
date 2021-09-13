import React, { createContext, useReducer } from 'react';
import { data } from '../data.js';
import propertyReducer from './reducers/properties.reducers';

const initialProperties = data;

export const PropertiesContext = createContext();

export function PropertiesProvider(props) {
  const [properties, dispatch] = useReducer(propertyReducer, initialProperties);

  return (
    <PropertiesContext.Provider value={{ properties, dispatch }}>
      {props.children}
    </PropertiesContext.Provider>
  );
}
