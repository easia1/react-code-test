import React, { useContext } from 'react';
import { Context } from '../../context/Context';

const Search = () => {
    const { query, setQuery, setOffset } = useContext(Context);

    const search = (e) => {
        setQuery(e.target.value);
        setOffset(0);
    };

    return (
        <input
            type="text"
            value={query}
            className="search"
            onChange={search}
            placeholder="Search exact name"
        />
    );
};

export default Search;
