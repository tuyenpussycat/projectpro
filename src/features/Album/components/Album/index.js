import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className='album'>
            <div className='albumThumbnail'>
                <img src={album.thumbnailUrl} alt={album.name}></img>
            </div>
            <p className="albumName">{album.name}</p>
        </div>
    );
}

export default Album;