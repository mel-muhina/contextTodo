import React, { useState, useContext, createContext } from "react";

const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
    const [status, setStatus] = useState('all');

    return (
        <StatusContext.Provider value={{ status, setStatus }}>
            {children}
        </StatusContext.Provider>
    );
};

export const useStatus = () => useContext(StatusContext);
