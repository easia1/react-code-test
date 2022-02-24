import React, { useRef, useCallback, useContext } from 'react';
import LaunchCard from './LaunchCard';
import { Context } from '../../context/Context';
import Loader from '../Loader';

const List = () => {
    const { setOffset, launches, loading, hasMore } = useContext(Context);

    const observer = useRef();
    const lastLaunchEl = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setOffset((prevOffset) => prevOffset + 10);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <div className="results">
            {launches.map((launch, index) => {
                if (launches.length === index + 1) {
                    return (
                        <React.Fragment key={index}>
                            <LaunchCard
                                innerRef={lastLaunchEl}
                                launch={launch}
                            />
                        </React.Fragment>
                    );
                } else {
                    return (
                        <React.Fragment key={index}>
                            <LaunchCard launch={launch} />
                        </React.Fragment>
                    );
                }
            })}
            {loading ? <Loader /> : ''}
            <p class="list-end">
                {launches.length > 0 && !hasMore && !loading
                    ? 'End of List'
                    : ''}
                {!launches.length > 0 && !hasMore && !loading
                    ? 'No results'
                    : ''}
            </p>
        </div>
    );
};

export default List;
