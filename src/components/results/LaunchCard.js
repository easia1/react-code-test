import React, { useState } from 'react';

const LaunchCard = ({ innerRef, launch }) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const status = () => {
        if (launch.launch_success && !launch.upcoming) {
            return <div className="card-status success">Success</div>;
        } else if (!launch.launch_success && !launch.upcoming) {
            return <div className="card-status fail">Failed</div>;
        } else {
            return <div className="card-status upcoming">Upcoming</div>;
        }
    };

    const year = () => {
        let current_year = new Date().getFullYear();
        if (launch.launch_year < current_year) {
            return `${current_year - launch.launch_year} years ago `;
        } else {
            return `In ${launch.launch_year - current_year} years `;
        }
    };

    return (
        <div
            ref={innerRef}
            className={isActive ? 'card expand' : 'card'}
            onClick={toggleClass}
        >
            <div className="card-header">
                {launch.links.mission_patch_small ? (
                    <img
                        className="card-patch"
                        src={launch.links.mission_patch_small}
                        alt="mission logo"
                    />
                ) : (
                    ''
                )}
                <h1 class="card-name">{launch.mission_name}</h1>
                {status()}
            </div>
            <div className="details">
                <br />
                <br />
                <p>
                    {year()}
                    {launch.links.video_link ? (
                        <>
                            |{' '}
                            <a
                                href={launch.links.video_link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Video{' '}
                            </a>
                        </>
                    ) : (
                        ''
                    )}
                    {launch.links.article_link ? (
                        <>
                            |{' '}
                            <a
                                href={launch.links.article_link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Article{' '}
                            </a>
                        </>
                    ) : (
                        ''
                    )}
                </p>
                <br />
                <p>{launch.details ? launch.details : 'No information'}</p>
            </div>
        </div>
    );
};

export default LaunchCard;
