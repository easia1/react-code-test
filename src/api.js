import axios from 'axios';
import { useEffect, useContext } from 'react';
import { Context } from './context/Context';

axios.defaults.baseURL = 'https://api.spacexdata.com/v3';

export const Load = () => {
    const { setLoading, setError, setLaunches, setHasMore, query, offset } =
        useContext(Context);

    useEffect(() => {
        setLaunches([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: 'launches',
            params: { mission_name: query, limit: 10, offset: offset },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                setLaunches((previousLaunches) => [
                    ...new Set([...previousLaunches, ...res.data]),
                ]);
                setHasMore(res.data.length > 0);
                setLoading(false);
            })
            .catch((err) => {
                if (axios.isCancel(err)) return;
                setError(true);
            });
        return () => cancel();
    }, [query, offset]);
};
