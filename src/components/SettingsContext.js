import React from 'react';

//Context object created with initial/default value nothing, 
//it will read current context value from closest matching Provider

const SettingsContext = React.createContext({}); 
export default SettingsContext;