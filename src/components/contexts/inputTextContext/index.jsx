import React, { useState, useContext, createContext } from "react";

const InputTextContext = createContext();

export const InputProvider = ({ children }) => {
    const [inputText, setInputText] = useState('');

    return (
        <InputTextContext.Provider value={{ inputText, setInputText }}>
            {children}
        </InputTextContext.Provider>
    );
};

export const useInput = () => useContext(InputTextContext);
