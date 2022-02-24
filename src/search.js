import { useEffect, useState } from 'react';
import axios from 'axios';

const search = (query, pageNo) => {
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.spacexdata.com/v3',
        });
    }, [query, pageNo]);

    return null;
};

export default search;
