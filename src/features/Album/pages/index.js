import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Tyn-Tyn",
            thumbnailUrl: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/240390608_838161813549805_7814681848704867538_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-O09KUhURLoAX8ZUeUg&_nc_ht=scontent.fhan14-1.fna&oh=2b5b6870ae8466afe8192e04c5a4fb19&oe=617E2867'
        },
        {
            id: 2,
            name: "Neymar and Messi",
            thumbnailUrl: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/174025530_791650834867570_4053113521379578228_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=RgFiBcjcO9gAX9nR5tI&_nc_ht=scontent.fhan14-2.fna&oh=6fcaf43596e1abec7a32010851f7fa9a&oe=617E963F'
        },
        {
            id: 3,
            name: "Luffy",
            thumbnailUrl: 'https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/69783153_384163968949594_8764364380805529600_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=CIX3UqqksgkAX_ruD8u&_nc_ht=scontent.fhan14-1.fna&oh=fb61d5102eee0bbc28617b46624fd5e7&oe=619E3826'
        },
    ];
    return (
        <div>
            <h2>List cho vui thoi</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;