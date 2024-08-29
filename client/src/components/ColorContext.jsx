import React from 'react';

const ColorContext = React.createContext();

export const ColorProvider = ColorContext.Provider;
export const useColor = () => React.useContext(ColorContext);