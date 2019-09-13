import React from 'react';

const authContext = React.createContext({});

export const Provider = authContext.Provider;
export const Consumer = authContext.Consumer;
export default authContext;
