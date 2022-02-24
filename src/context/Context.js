import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    let [launches, setLaunches] = useState([]);
    let [hasMore, setHasMore] = useState(false);
    let [query, setQuery] = useState('');
    let [offset, setOffset] = useState(0);

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                error,
                setError,
                launches,
                setLaunches,
                hasMore,
                setHasMore,
                query,
                setQuery,
                offset,
                setOffset,
            }}
        >
            {children}
        </Context.Provider>
    );
};
