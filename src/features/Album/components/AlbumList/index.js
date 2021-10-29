import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.css'

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <ul className="albumList">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album}></Album>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;