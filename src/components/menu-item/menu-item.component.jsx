import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageURL})`
            }}
        />
        <div className="content">
            <h3 className="title">{title.toUpperCase()}</h3>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);