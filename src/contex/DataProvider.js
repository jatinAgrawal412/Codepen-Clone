import React, { createContext, useState } from 'react';

export const DataContext = createContext();


const DataProvider = ({ children }) => {
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');
    return (
        <DataContext.Provider value={{ html, js, css, setHtml, setCss, setJs }}>
            {children}
        </DataContext.Provider>

    )
}

export default DataProvider;
