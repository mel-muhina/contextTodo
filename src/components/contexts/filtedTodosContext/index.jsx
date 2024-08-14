import React, { useState, useContext, createContext } from "react";

const FilterContext = createContext();

export const FilteredProvider = ({ children }) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    return (
        <FilterContext.Provider value={{ filteredTodos, setFilteredTodos }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFiltered = () => useContext(FilterContext);
